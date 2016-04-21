---
title: Sourcemaps
---

To generate separate sourcemap files – i.e. an `output.js.map` file to go along with `output.js` – use the `--sourcemap` or `-m` flag:

```bash
buble -i input.js -m -o output.js
```

To append the sourcemap as an inline data URI, use `-m inline`:

```bash
buble -i input.js -m inline -o output.js
```

If you're using the [JavaScript API](#using-the-javascript-api), you can control the `sources` and `file` properties of the sourcemap by passing in the following options:

```js
var output = buble.transform( input, {
  file: 'output.js',
  source: 'input.js'
});

var map = output.map;
```

The returned `map` object is a version 3 sourcemap. For convenience it has two methods – `toString`, which generates a JSON encoding, and `toUrl`, which generates a data URI:

```js
// to create a separate .map file
output.code += '\n//# sourceMappingURL=output.js.map';
fs.writeFileSync( 'output.js', output.code );
fs.writeFileSync( 'output.js.map', output.map.toString() );

// or, to create an inline sourcemap
output.code += '\n//# sourceMappingURL=' + output.map.toUrl();
fs.writeFileSync( 'output.js', output.code );
```
