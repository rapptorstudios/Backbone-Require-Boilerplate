define(['jquery', 'backbone'],

	function($, Backbone) {

		var Location = Backbone.Model.extend({
			className: 'Location',

			initialize: function() {

			},

			defaults: {
				codename: 'Super Secret Location',
				city: 'Greenville',
				state: 'SC',
				ZIP: 29601,
				geocoord: {
					lat: 'latitude',
					long: 'longitude'
				}
			}

		});

		return Location;

	}

);
