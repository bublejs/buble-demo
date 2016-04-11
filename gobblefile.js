/*global module, require */
var gobble = require( 'gobble' );

module.exports = gobble([
	gobble( 'src/files' ),

	// node_modules
	gobble( 'node_modules/buble/dist' )
		.include( 'buble.deps.js' ),

		gobble( 'node_modules/ractive' )
			.include( 'ractive.js' )
			.moveTo( 'ractive' ),

		gobble( 'node_modules/codemirror' )
		.include([ 'lib/**', 'mode/javascript/**', 'mode/shell/**' ])
		.moveTo( 'codemirror' ),

	// app
	gobble( 'src/app' )
		.transform( 'rollup', {
			entry: 'main.js',
			dest: 'app.js',
			format: 'iife',
			external: [ 'ractive' ],
			plugins: [
				require( 'rollup-plugin-ractive' )(),
				require( 'rollup-plugin-buble' )(),
				require( 'rollup-plugin-node-resolve' )({
					jsnext: true,
					skip: [ 'ractive' ]
				})
			]
		}),

	gobble( 'src/styles' )
		.transform( 'postcss', {
			src: 'index.css',
			dest: 'min.css',
			plugins: [
				require( 'postcss-import' ),
				require( 'autoprefixer' ),
				require( 'postcss-nested' ),
				require( 'postcss-clearfix' )
				//require( 'cssnano' ) // commenting out until we can figure out how to disable z-index rebasing
			],
			map: true
		})

// minify on deploy, but don't bother in development
]).transformIf( gobble.env() === 'production', 'uglifyjs' );
