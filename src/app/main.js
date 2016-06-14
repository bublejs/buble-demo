import Demo from './Demo.html';

const sample = `
/*
  Thanks for trying Bublé! Quickstart:

  $ npm install -g buble
  $ echo "const answer = () => 42" > input.js
  $ buble input.js > output.js
  $ cat output.js

  This is a relatively new project – please report
  any bugs you find by clicking 'report bugs' and
  linking to a version of this page demonstrating
  the issue. Thanks!

  Note that some ES2015 features are deliberately
  unsupported - click the 'more info' link in nav.
*/

// arrow functions
const add = ( a, b ) => a + b;

// classes
class Circle extends Shape {
  constructor ( radius ) {
    super();
    this.radius = this;
  }

  area () {
    return Math.PI * Math.pow( this.radius, 2 );
  }
}

// object literals
let obj = {
  shorthandProperty,
  shorthandMethod () {
    console.log( 'hello!' );
  },
  [computed]: 42
};

// template strings
let message = \`
  hello \${name}!
  it's good to see you\`;

// destructuring
let { x, y } = point;
let { top, left } = element.getBoundingClientRect();
let [ one, two, three ] = document.querySelectorAll( 'p' );

// default parameters
function foo ( options = {} ) {
  if ( options.bar ) alert( options.baz );
}

// rest parameters
function sprintf ( str, ...values ) {
  return str.replace( /%(w+)/g, ( match, type ) => {
    return format( values.shift(), type );
  });
}

// spread operator
var max = Math.max( ...values );

// block scoping
for ( let i = 0; i < 10; i += 1 ) {
  const square = i * i;
  setTimeout( () => console.log( square ), i * 100 );
}

// binary and octal literals
0b101010 === 0o52;

`.trim();

// recover state from hash fragment
const recovered = decodeURIComponent( window.location.hash.slice( 1 ) );

const view = new Demo({
	el: 'main',
	data: {
		input: recovered || sample
	}
});

view.observe( 'input', input => {
	window.location.hash = encodeURIComponent( input );
});

window.addEventListener( 'hashchange', () => {
	view.set( 'input', decodeURIComponent( window.location.hash.slice( 1 ) ) );
});

document.querySelector( 'h1 a' ).addEventListener( 'click', event => {
	if ( event.which === 1 ) {
		event.preventDefault();
		view.set( 'input', sample );
	}
});
