define(['jquery','backbone','models/Post'],

	function($, Backbone, Post) {

		var Posts = Backbone.Collection.extend({
			model: Post
		});

		return Posts;

	}

);