'use strict';

var path = require( 'path' );

module.exports = {
	'entry'  : path.resolve( __dirname, 'public/app/main.js' ),
	'output' : {
		'path'     : path.resolve( __dirname, 'build' ),
		'filename' : 'bundle.js',
	},
	'module' : {
		'loaders' : [
			{
				'test' : /\.jsx?$/,
				'exclude' : /(node_modules|bower_components)/,
				'loader' : 'babel',
				'query' : {
					'presets' : [ 'es2015', 'react', 'stage-0' ]
				}
			},
			{
				'test'   : /\.css$/,
				'loader' : 'style!css'
			}
		]
	}
};
