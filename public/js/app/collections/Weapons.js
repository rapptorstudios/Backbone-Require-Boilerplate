define(['jquery','backbone','models/Weapon'],

	function($, Backbone, Weapon) {

		var Weapons = Backbone.Collection.extend({
			model: Weapon
		});

		return Weapons;

	}

);