const fs = require( 'fs' );
const path = require( 'path' );

const marked = require( 'marked' );
const highlight = require( 'highlight.js' );
const cssmin = require( 'cssmin' );
const uglifyjs = require( 'uglify-js' );

const rawReplace = require( './modules/raw-replace.js' );

let wrapper = fs.readFileSync( path.join( __dirname, 'wrapper.html' ), 'utf8' );
let css = fs.readFileSync( path.join( __dirname, 'node_modules', 'github-markdown-css', 'github-markdown.css' ), 'utf8' );
let highlightCss = fs.readFileSync( path.join( __dirname, 'node_modules', 'highlight.js', 'styles', 'default.css' ), 'utf8' );
let highlightjs = fs.readFileSync( path.join( __dirname, 'node_modules', 'highlight.js', 'lib', 'highlight.js' ), 'utf8' );

marked.setOptions( {
    highlight: ( code ) => {
        return highlight.highlightAuto( code ).value;
    },
} );

module.exports = ( markdown,
    options = {
        title: 'Index',
        minify: true,
} ) => {
    const html = marked( markdown );

    if ( options.minify ) {
        // Minify CSS
        css = cssmin( css );
        highlightCss = cssmin( highlightCss );

        // Minify JS
        highlightjs = uglifyjs.minify( highlightjs ).code;
    }

    wrapper = rawReplace( '__MARKDOWN_CSS__', css, wrapper );
    wrapper = rawReplace( '__HIGHLIGHT_CSS__', highlightCss, wrapper );
    wrapper = rawReplace( '__HIGHLIGHT_JS__', highlightjs, wrapper );

    return wrapper
        .replace( '__TITLE__', options.title )
        .replace( '__CONTENT__', html );
};
