import Demo from './Demo.html';

const sample = `
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
  }
};

// template strings
let message = \`
  hello !
  it's good to see you\`;

// destructuring
let { x, y } = point;
let { top, left } = element.getBoundingClientRect();
let [ one, two, three ] = document.querySelector( 'p' );

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
