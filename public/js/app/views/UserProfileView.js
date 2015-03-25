define(['jquery',
	'backbone',
	'models/User',
	'text!templates/user-name.html',
	'text!templates/user-profile-photo.html',
	'text!templates/user-cover-photo.html',
	'text!templates/user-city.html',
	'text!templates/user-ranking.html',
	'text!templates/user-friend-list.html',
	'text!templates/patrick-attempt.html'],

	function($, Backbone, User, name, profilePhoto, coverPhoto, city, ranking, friendList, patrick){

		window.console && console.log(new User());

		var UserProfileView = Backbone.View.extend({

			el: ".main-container",

			initialize: function() {
				this.User = new User();
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
				patrickTemp = _.template(patrick);

				var nameTemplateWithData = nameTemplate(this.User.toJSON());
				var cityTemplateWithData = cityTemplate(this.User.toJSON());

				var userProfileViewLayout = {
					nameTemplate: nameTemplateWithData,
					cityTemplate: cityTemplateWithData
				}

				this.$el.html(patrickTemp(userProfileViewLayout));

				// Maintains chainability
				return this;
			}
		});

		return UserProfileView;
	}
);