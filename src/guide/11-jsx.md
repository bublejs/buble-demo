---
title: JSX
---

In addition to ES2015/16, Bublé supports [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html), which is used in React and similar libraries:

```js
// input
ReactDOM.render(
  <h1>Hello {name}!</h1>,
  document.querySelector( 'main' )
);

// output
ReactDOM.render(
  React.createElement( 'h1', null, "Hello ", name, "!" ),
  document.querySelector( 'main' )
);
```

You can specify a pragma other than `React.createElement` using the `jsx` option illustrated in the previous section.

If `React` (or whatever other JSX library you're using) isn't available in the global namespace, you're responsible for importing it into the file:

```js
// ES module
import * as React from 'react';

// CommonJS
const React = require( 'react' );
```

*Note: Bublé does not currently optimise JSX expressions by, for example, hoisting static elements. Coming soon!*
