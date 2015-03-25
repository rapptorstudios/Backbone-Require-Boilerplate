define(['jquery',
	'backbone',
	'models/User',
	'text!templates/user-name.html',
	'text!templates/user-profile-photo.html',
	'text!templates/user-cover-photo.html',
	'text!templates/user-city.html',
	'text!templates/user-ranking.html',
	'text!templates/user-friend-list.html'],

	function($, Backbone, User, name, profilePhoto, coverPhoto, city, ranking, friendList){

		var UserProfileView = Backbone.View.extend({

			el: ".main-container",

			initialize: function() {
				this.render();
			},

			events: {

			},

			render: function() {
				nameTemplate =					_.template(name);
				profilePhotoTemplate = 	_.template(profilePhoto);
				coverPhotoTemplate = 		_.template(coverPhoto);
				cityTemplate = 					_.template(city);
				rankingTemplate = 			_.template(ranking);
				friendListTemplate = 		_.template(friendList);

				this.$el.html(friendListTemplate);

				// Maintains chainability
				return this;
			}
		});

		return UserProfileView;
	}
);