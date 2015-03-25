define([
	'jquery',
	'backbone',

	// MODELS
	'models/Club',
	'models/Comment',
	'models/Model',
	'models/Post',
	'models/User',

	// COLLECTIONS
	'collections/Clubs',
	'collections/Collection',
	'collections/Comments',
	'collections/Posts',
	'collections/Users',

	// VIEWS
	'views/CoolView',
	'views/UserProfileView',
	'views/View'
	],

	function($, Backbone, Club, Comment, Model, Post, User, Clubs, Collection, Comments, Posts, Users, CoolView, UserProfileView, View) {

		var Router = Backbone.Router.extend({

			initialize: function() {
				Backbone.history.start();
			},

			routes: {
				'': 				'index',
				'cool': 		'renderCool',
				'profile': 	'renderUserProfile'
			},

			index: function() {
				new View();
			},

			renderCool: function(){
				new CoolView();
			},

			renderUserProfile: function(){
				new UserProfileView();
			}
		});

		return Router;
	}
);