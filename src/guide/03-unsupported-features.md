---
title: Unsupported features
---

Bublé only transpiles *language features* – it doesn't attempt to shim or polyfill the environment. If you want to use things like `array.findIndex(...)` or `'x'.repeat(3)` you'll have to bring your own polyfill (check out [core-js](https://github.com/zloirock/core-js) or [es6-shim](https://github.com/paulmillr/es6-shim)).

It also refuses to transpile things that result in ES5 code with size or performance hazards (this list isn't set in stone! It might support some of these features in future), or which are altogether impossible to transpile to ES5.

With the exception of modules (if you're using an ES2015 module bundler such as [Rollup](http://rollupjs.org/)), you should probably avoid these features until they have widespread native support.

* Tagged template strings (see [Dangerous transforms](#dangerous-transforms))
* Iterators
* `for...of` loops (see [Dangerous transforms](#dangerous-transforms))
* Generators
* Regular expression unicode (`u`) and sticky (`y`) flags
* Modules (pssst... use [Rollup](http://rollupjs.org)!)
* `Map`, `Set`, `WeakMap`, `WeakSet`, `Proxy`, `Symbol`
* Tail call optimisation
