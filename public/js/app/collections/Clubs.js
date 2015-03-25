define(['jquery','backbone','models/Club'],

	function($, Backbone, Club) {

		var Clubs = Backbone.Collection.extend({
			model: Club
		});

		return Clubs;

	}

);