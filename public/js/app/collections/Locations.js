define(['jquery','backbone','models/Location'],

	function($, Backbone, Location) {

		var Locations = Backbone.Collection.extend({
			model: Location
		});

		return Locations;

	}

);