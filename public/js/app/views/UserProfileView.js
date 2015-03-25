define(['jquery',
	'backbone',
	'models/User',
	// 'text!templates/user-name.html',
	// 'text!templates/user-profile-photo.html',
	// 'text!templates/user-cover-photo.html',
	// 'text!templates/user-city.html',
	// 'text!templates/user-ranking.html',
	'text!templates/user-friend-list.html'
	],

	function($, Backbone, User, template){
	// function($, Backbone, User, name, profilePhoto, coverPhoto, city, ranking, friendList){

		var UserProfileView = Backbone.View.extend({

			el: ".main-container",

			initialize: function() {
				this.render();
			},

			events: {

			},

			render: function() {
				this.template = _.template(template, {});
				// this.template = _.template(name, profilePhoto, coverPhoto, city, ranking, friendList, {});
				// this.template = _.template(template, {});
				this.$el.html(this.template);

				// Maintains chainability
				return this;
			}
		});

		return UserProfileView;
	}
);