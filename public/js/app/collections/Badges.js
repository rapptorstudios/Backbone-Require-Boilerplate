define(['jquery','backbone','models/Badge'],

	function($, Backbone, Badge) {

		var Badges = Backbone.Collection.extend({
			model: Badge
		});

		return Badges;

	}

);