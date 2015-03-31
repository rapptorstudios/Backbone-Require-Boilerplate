define(['jquery',
	'backbone',
	'models/Club',
	'models/Post',
	'text!templates/club-profile.html',
	'text!templates/post/author-info.html',
	'text!templates/post/comment.html',
	'text!templates/post/post.html'],

	function($, Backbone, Club, Post, clubProfile, authorInfo, comment, postContents){

		var ClubProfileView = Backbone.View.extend({

			el: ".main-container",

			// events: {	},

			initialize: function() {
				this.Post = new Post();
				this.Club = new Club();
				this.render();
			},

			render: function() {
				var authorInfoTemplate =	_.template(authorInfo);
				var authorInfoData =			authorInfoTemplate(this.Post.toJSON());

				var commentTemplate =			_.template(comment);
				var commentData =					commentTemplate(this.Post.toJSON());

				var postTemplate =				_.template(postContents);
				var postData = {
					authorInfoTemplate: authorInfoData,
					commentTemplate: commentData
				}

				this.$el.html(postTemplate(postData));

				// Maintains chainability
				return this;
			}
		});

		return ClubProfileView;
	}
);