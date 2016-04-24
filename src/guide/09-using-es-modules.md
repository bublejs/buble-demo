---
title: Using Bublé with ES2015 modules
---

Bublé doesn't support `import` and `export` statements, because they don't have an ES5 equivalent. (CommonJS – i.e. `require` and `exports` – are features of the *environment* rather than features of the *language*, and conversion between the two forms is less straightforward than you might imagine.)

If you're only targeting a Node.js environment, and don't want to bundle your modules, you should continue to use `require` and `exports`.

If you're targeting browsers instead of (or as well as) Node.js, or want to bundle your code for the [many advantages it brings](https://medium.com/@Rich_Harris/how-to-not-break-the-internet-with-this-one-weird-trick-e3e2d57fee28#.24agfm6t1), you should use `import` and `export` but tell Bublé not to worry about it by disabling the `modules` transformation (which just throws an error):

```bash
# on the command line
buble input.js --no modules > output.js
```

```js
// in JavaScript
var output = buble.transform( input, {
  transforms: {
    modules: false
  }
});
```

Then, once you've got your compiled modules, you can bundle them with a bundler that supports ES modules, such as [Rollup](rollupjs.org) (with [rollup-plugin-buble](https://www.npmjs.com/package/rollup-plugin-buble)) or [Webpack 2](https://webpack.github.io/docs/roadmap.html) (with [buble-loader](https://www.npmjs.com/package/buble-loader)).
