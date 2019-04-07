# MarkPage

Throw in markdown, get a self-contained HTML file in return.

## Install

```
$ npm install @stendahls/markpage
```

## Usage

```js
const markpage = require( '@stendahls/markpage' );

const markdown = fs.readFileSync( './readme.md', 'utf8' );
const html = markpage( markdown, 'MyTitle' );
```

And then with something like express
```js
app.get( '/', ( request, response ) => {
    response.send( html );
} );
```

### API
Returns a full HTML page with styling as a string.

#### markpage( markdownString, [ options ] );  

##### title
Type: `string`  
Default: 'Index'

##### minify
Minify the CSS & JS  
Type: `Boolean`  
Default: `true`
