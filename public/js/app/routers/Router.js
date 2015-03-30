define([
	'jquery',
	'backbone',

	// MODELS
	'models/Badge',
	'models/Club',
	'models/Comment',
	'models/Model',
	'models/Post',
	'models/User',

	// COLLECTIONS
	'collections/Badges',
	'collections/Clubs',
	'collections/Comments',
	'collections/Posts',
	'collections/Users',

	// VIEWS
	'views/CoolView',
	'views/PostView',
	'views/UserProfileView',
	'views/View'
	],

	function($, Backbone, Badge, Club, Comment, Model, Post, User, Badges, Clubs, Comments, Posts, Users, CoolView, PostView, UserProfileView, View) {

		var Router = Backbone.Router.extend({

			initialize: function() {
				Backbone.history.start();
			},

			routes: {
				'': 				'index',
				'cool': 		'renderCool',
				'post': 		'renderPost',
				'profile': 	'renderUserProfile'
			},

			index: function() {
				new View();
			},

			renderCool: function(){
				new CoolView();
			},

			renderPost: function(){
				new PostView();
			},

			renderUserProfile: function(){
				new UserProfileView();
			}
		});

		return Router;
	}
);