---
title: Dangerous transforms
---

Certain ES2015 features are useful, but costly to convert to ES5 while adhering closely to spec. In these cases, Bublé offers 'dangerous transforms', which generate highly efficient ES5 code but with important caveats.

Enable these by adding them to the `transforms` option (see [Command line options](#command-line-options) or [Using the JavaScript API](#using-the-javascript-api)).


### `dangerousForOf`

```js
// in
for ( let div of document.querySelectorAll( 'div' ) ) {
  div.style.backgroundColor = randomColor();
}

// out
for ( var i = 0, list = document.querySelectorAll( 'div' ); i < list.length; i += 1 ) {
  var div = list[i];

  div.style.backgroundColor = randomColor();
}
```

The ES6 `for-of` statement works with *iterable values*, which includes any `Array`, `String`, `Map`, `Set`, or `NodeList` (think `document.querySelectorAll('div')`), but also any other object with a `[Symbol.iterator]` method, or the return value of a generator function.

Since collections (`Map`, `Set` etc), `Symbol`, and generators aren't supported in ES5 environments, they are not supported by `dangerousForOf`. Instead, it will assume the *iterable value* to be just an array-like object with `length` property, this includes arrays, strings and nodelists.

This is very similar to the [approach taken by TypeScript](https://basarat.gitbooks.io/typescript/content/docs/for...of.html). Unless you're doing something crazy, code written with this transformation in mind will continue to work when you stop using it in favour of using native `for-of` support.


### `dangerousTaggedTemplateString`

```js
// in
get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`;

// out
get([ "http://example.com/foo?bar=", "&quux=", "" ], bar + baz, quux );
```

This differs from spec in that the first argument to `get` doesn't have a `raw` property. The vast majority of custom template string interpolators (e.g. `get` in this case) don't use `raw`, and so simply passing an array of string literals is fine.

Custom string interpolators that work with `dangerousTaggedTemplateString` will continue to work when you stop transpiling template strings altogether.
