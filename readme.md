# MarkPage

Throw in markdown, get a self-contained HTML file in return.

## Install

```
$ npm install markpage
```

## Usage

```js
const markpage = require( 'markpage' );

const markdown = fs.readFileSync( './readme.md', 'utf8' );
const html = markpage( markdown, 'MyTitle' );
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
