# num-conv-string

This project creates the num-conv-string library in umd format. The library is available in npmjs. The file
index.js contains 2 function numToWord() and wordToNum(). The source code for the 2 functions is copied from
https://webpack.js.org/guides/author-libraries/

## Installation

* Install  [node](https://nodejs.org)
* run `npm install`

## Usage

* `npm run build` to create the library. The library is available in the lib folder.
* Use `npm login`, `npm publish` and `npm logout`.
* For your own library you need to change the name.
* The library is using an external dependency to lodash.

## Test of the two built-in functions.

The library can be used with node in the commonjs format. In the test folder are some examples on how to use the library.

``` javascript
numConvString.wordToNum('Eins')
numConvString.numToWord(1)
```

## Testing with the Script Tag in an index.html file

``` html
html lang="de">
<head>
    <title>Webpack Library Beispiel - Übersetzung von Zahlen</title>
    <meta charset="utf-8"/>
    <script type='text/javascript' src='https://unpkg.com/lodash@4.16.6'></script>
    <!-- <script src="https://unpkg.com/num-conv-string"></script> -->
</head>
<body>
<div id='root'>
</div>
<script type='text/javascript' src='../../lib/num-conv-string.umd.min.js'></script>
<script type='text/javascript'>
    document.getElementById('root').innerHTML = " Ein Browser Beispiel für den Aufruf einer API: " +
        "<br> <br>Resultat: " +
        "<br> übersetze wordToNum('Eins') zu " + numConvString.wordToNum('Eins') +
        "<br> übersetze wordToNum('Zwei') zu " + numConvString.wordToNum('Zwei') +
        "<br> übersetze numToWord(1) zu " + numConvString.numToWord(1) +
        "<br> übersetze numToWord(2) zu " + numConvString.numToWord(2) +
            "" ;
</script>
</body>
</html>

```

##  Test with Nodejs

Since the umd format is using a window object, this object has to be provided.

``` javascript
global['window'] = {};
var numConvString = require('../../lib/num-conv-string.umd.js');

console.log(numConvString.wordToNum('Zwei'));
```
