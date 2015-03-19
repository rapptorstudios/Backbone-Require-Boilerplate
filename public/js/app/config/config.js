require.config({

	baseUrl: "./js/app",

	paths: {
		'jquery': 						'../libs/jquery/dist/jquery',
		'underscore': 				'../libs/underscore/underscore',
		'backbone': 					'../libs/backbone/backbone',
		'text': 							'../libs/requirejs-text/text'
		// 'foundation.core': 		'../libs/foundation/js/foundation',
		// 'foundation.topbar': 	'../libs/foundation/js/foundation/foundation.topbar',
		// 'modernizr': 					'../libs/foundation/js/vendor/modernizr'
	},

	shim: {
		// 'foundation.core': {
		// 		deps: [
		// 		'jquery',
		// 		'modernizr'
		// 		],
		// 		exports: 'Foundation'
		// },

		// 'foundation.topbar': {
		// 		deps: [
		// 		'foundation.core'
		// 		]
		// },

		// 'modernizr': {
		// 		exports: 'Modernizr'
		// }
	}

});