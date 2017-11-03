---
title: Supported features
---

More features may be added in future. Currently:

### Arrow functions (`transforms.arrow`)

```js
// in
var squares = numbers.map( n => n * n );

// out
var squares = numbers.map( function ( n ) { return n * n; } );
```

### Classes (`transforms.classes`)

*Note: Bublé assumes you're using the `class` keyword correctly – it doesn't stop you from instantiating a class without `new`, for example, and doesn't quite adhere to the spec as regards enumerability of methods, etc. Think of Babel's 'loose' mode, except looser.*

```js
// in
class Circle extends Shape {
  constructor ( radius ) {
    super();
    this.radius = radius;
  }

  area () {
    return Math.PI * Math.pow( this.radius, 2 );
  }
}

// out
var Circle = (function (Shape) {
  function Circle ( radius ) {
    Shape.call(this);
    this.radius = radius;
  }

  Circle.prototype = Object.create( Shape && Shape.prototype );
  Circle.prototype.constructor = Circle;

  Circle.prototype.area = function area () {
    return Math.PI * Math.pow( this.radius, 2 );
  };

  return Circle;
}(Shape));
```


### Object shorthand methods and properties (`transforms.conciseMethodProperty`)

```js
// in
var person = {
  name,
  age,
  sayHello () {
    alert( 'hello! my name is ' + this.name );
  }
};

// out
var person = {
  name: name,
  age: age,
  sayHello: function () {
    alert( 'hello! my name is ' + this.name );
  }
};
```


### Template strings (`transforms.templateString`)

*Note: Tagged template strings are not supported, unless you use the `dangerousTaggedTemplateString` transform. See [Dangerous transforms](#dangerous-transforms).*

```js
// in
var message = `
  hello ${name}!
  the answer is ${40 + 2}`.toUpperCase();

// out
var message = ("\n  hello " + name + "!\n  the answer is " + (40 + 2)).toUpperCase();
```


### Object and array destructuring (`transforms.destructuring` and `transforms.parameterDestructuring`)

```js
// in
var [ first, second, third ] = nodes;
var { top, left } = first.getBoundingClientRect();

function rect ({ x, y, width, height, color }) {
  ctx.fillStyle = color;
  ctx.fillRect( x, y, width, height );
}

// out
var first = nodes[0], second = nodes[1], third = nodes[2];
var ref = first.getBoundingClientRect(), top = ref.top, left = ref.left;

function rect (ref) {
  var x = ref.x;
  var y = ref.y;
  var width = ref.width;
  var height = ref.height;
  var color = ref.color;

  ctx.fillStyle = color;
  ctx.fillRect( x, y, width, height );
}
```


### Default parameters (`transforms.defaultParameter`)

```js
// in
function foo ( options = {} ) {
  if ( options.bar ) {
    // code goes here
  }
}

// out
function foo ( options ) {
  if ( options === void 0 ) options = {};

  if ( options.bar ) {
    // code goes here
  }
}
```


### Block scoping (`transforms.letConst`)

```js
// in
var x = 1;

if ( a ) {
  let x = 2;
  console.log( x );
}

console.log( x );

// out
var x = 1;

if ( a ) {
  var x$1 = 2;
  console.log( x$1 );
}

console.log( x );
```


### Binary and octal literals (`transforms.numericLiteral`)

```js
// in
assert.equal( 0b101010 === 0o52 );

// out
assert.equal( 42 === 42 );
```


### Exponentiation operator (`transforms.exponentiation`)

```js
// in
var cubed = x ** 3;
a **= b;

// out
var cubed = Math.pow( x, 3 );
a = Math.pow( a, b );
```


### Computed properties (`transforms.computedProperty`)

```js
// in
var obj = {
  [a]: 1
};

var obj = {};
obj[a] = 1;
```


### Unicode regular expressions (`transforms.unicodeRegExp`)

```js
// in
var regex = /a💩b/u;

// out
var regex = /a(?:\uD83D\uDCA9)b/;
```


### Object spread and rest

This isn't part of ES2015 or ES2016 – it's currently a [stage 3 proposal](https://github.com/sebmarkbage/ecmascript-rest-spread) – but since it's commonly used with JSX, it's supported in Bublé.

You may need to polyfill `Object.assign` depending on your target environment; alternatively you can use the `objectAssign` option to specify an alternative.

```js
// in
var obj = { ...x };

// out
var obj = Object.assign({}, x);
```


### JSX

[See below.](jsx)
