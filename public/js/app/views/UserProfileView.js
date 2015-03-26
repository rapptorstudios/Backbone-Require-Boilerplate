define(['jquery',
	'backbone',
	'models/User',
	'text!templates/userinfo/personal-info.html',
	'text!templates/userinfo/user-club-list.html',
	'text!templates/userinfo/user-friend-list.html',
	'text!templates/userinfo/user-info.html',
	'text!templates/userinfo/user-rank.html',
	'text!templates/userinfo/user-weapon-list.html'],

	function($, Backbone, User, personalInfo, clubList, friendList, info, rank, weaponList){

		var UserProfileView = Backbone.View.extend({

			el: ".main-container",

			initialize: function() {
				this.User = new User();
				this.render();
			},

			events: {

			},

			render: function() {
				var personalInfoTemplate =	_.template(personalInfo);
				var personalInfoData =			personalInfoTemplate(this.User.toJSON());

				var clubListTemplate =			_.template(clubList);
				var clubListData =					clubListTemplate(this.User.toJSON());

				var friendListTemplate =		_.template(friendList);
				var friendListData =				friendListTemplate(this.User.toJSON());

				var userInfoTemplate =			_.template(info);

				var rankTemplate =					_.template(rank);
				var rankData =							rankTemplate(this.User.toJSON());

				var weaponListTemplate =		_.template(weaponList);
				var weaponListData =				weaponListTemplate(this.User.toJSON());

				var userProfile = {
					personalInfoTemplate: personalInfoData,
					clubListTemplate: clubListData,
					friendListTemplate: friendListData,
					rankTemplate: rankData,
					weaponListTemplate: weaponListData
				}

				console.log(this);

				this.$el.html(userInfoTemplate(userProfile));

				// Maintains chainability
				return this;
			}
		});

		return UserProfileView;
	}
);