define(['jquery','backbone','models/Model'],

	function($, Backbone, Model) {

		var Collection = Backbone.Collection.extend({
			model: Model
		});

		return Collection;

	}

);