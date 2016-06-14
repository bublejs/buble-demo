---
title: Using the JavaScript API
---

As well as the command line interface, Bublé exposes a JavaScript API, which is useful for (for example) creating integrations with other build tools.

```js
var buble = require( 'buble' );

var input = 'const answer = () => 42;';
var output = buble.transform( input );

console.log( output.code ); // 'var answer = function () { return 42; };'
console.log( output.map ); // { version: 3, ... }
```

*See the [Sourcemaps](#sourcemaps) section for more information on how to handle `output.map`.*


### Options

The second argument to `buble.transform` is an optional options object:

```js
var output = buble.transform( input, {
  // corresponds to --target – if absent, everything will be
  // compiled to ES5
  target: { chrome: 48, firefox: 44 },

  // corresponds to --yes (true) and --no (false) – overrides
  // the settings derived from `target`
  transforms: {
    arrow: true,
    modules: false,
    dangerousForOf: true
  },

  // used for sourcemaps
  file: 'output.js',
  source: 'input.js',

  // custom JSX pragma (see below)
  jsx: 'NotReact.createElement',

  // custom `Object.assign` (used in object spread)
  objectAssign: 'angular.extend'
});
```
