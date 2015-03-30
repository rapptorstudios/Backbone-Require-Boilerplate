define(['jquery', 'backbone'],

	function($, Backbone) {

		var Badge = Backbone.Model.extend({
			className: 'Badge',

			initialize: function() {

			},

			defaults: {
				name: 'Super Cool Badge',
				earned: true, // boolean
				dateEarned: 'September 19, 2015'
			}

		});

		return Badge;

	}

);
