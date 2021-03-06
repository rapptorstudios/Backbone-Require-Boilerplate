define([
	'jquery',
	'backbone',

	// MODELS
	'models/Badge',
	'models/Club',
	'models/Comment',
	'models/Location',	
	'models/Model',
	'models/Post',
	'models/User',
	'models/Weapon',

	// COLLECTIONS
	'collections/Badges',
	'collections/Clubs',
	'collections/Comments',
	'collections/Locations',	
	'collections/Posts',
	'collections/Users',
	'collections/Weapons',

	// VIEWS
	'views/ClubProfileView',	
	'views/CoolView',
	'views/PostView',
	'views/UserProfileView',
	'views/View'
	],

	function($, Backbone, Badge, Club, Comment, Location, Model, Post, User, Weapon, Badges, Clubs, Comments, Locations, Posts, Users, Weapons, ClubProfileView, CoolView, PostView, UserProfileView, View) {

		var Router = Backbone.Router.extend({

			initialize: function() {
				Backbone.history.start();
			},

			routes: {
				'': 				'index',
				'club': 		'renderClub',
				'cool': 		'renderCool',
				'post': 		'renderPost',
				'profile': 	'renderUserProfile'
			},

			index: function() {
				new View();
			},
			
			renderClub: function(){
				new ClubProfileView();
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