define(['jquery',
	'backbone',
	'models/Post',
	'text!templates/post/author-info.html',
	'text!templates/post/comment.html',
	'text!templates/post/post.html'],

	function($, Backbone, Post, authorInfo, comment, postContents){

		var PostView = Backbone.View.extend({
			
			el: ".main-container",

			// events: {	},			

			initialize: function() {
				this.Post = new Post();
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

				console.log(this);

				this.$el.html(postTemplate(postData));

				// Maintains chainability
				return this;
			}
		});

		return PostView;
	}
);