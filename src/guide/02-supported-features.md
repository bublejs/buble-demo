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
