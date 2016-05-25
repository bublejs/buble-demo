---
title: What is Bublé?
---

Bublé is an ES2015+ compiler. It takes your ES2015/16 JavaScript code and turns it into code that can run in today's environments, including old versions of Node.js and Internet Explorer.

As the name suggests, Bublé is heavily inspired by (and indebted to) [Babel](https://babeljs.io) – but there are some key differences:

* Bublé limits itself to ES features that can be compiled to compact, performant ES5 (plus [JSX](JSX))
* There are no plugins or presets – less extensibility, but also zero configuration
* Code is only altered where necessary – your formatting and code style remain intact
* It's comparatively tiny and much faster

Complete spec compliance is impossible – some things just can't be expressed in ES5. Other things can be, but not efficiently. Recognising this, Bublé will prevent you from writing code that can't be compiled well – `for...of` loops, the regular expression `u` flag, and so on. See the [Unsupported features](#unsupported-features) section for more information.
