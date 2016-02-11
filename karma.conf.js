var path = require( 'path' );
var webpackConfig = require( './webpack.config' );

module.exports = function(config) {
  config.set( {

    files: [
			'test/index.js',
    ],

    frameworks: [ 'chai', 'mocha' ],

    browsers: [ 'Chrome' ],

    preprocessors: {
      // add webpack as preprocessor
      'test/index.js': [ 'webpack' ],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require( 'karma-chrome-launcher' ),
      require( 'karma-mocha' ),
      require( 'karma-chai' ),
      require( 'karma-webpack' )
    ]

  } );
};
