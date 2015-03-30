define(['jquery', 'backbone'],

	function($, Backbone) {

		var Weapon = Backbone.Model.extend({
			className: 'Weapon',

			initialize: function() {

			},

			defaults: {
				gun: {
					brand: 'Beretta',
					model: 'Model 9000 S',
					caliber: '9mm',
					gauge: '.40 S&W',
					sights: 'Night sights',
					trigger: 'Double action'

					ammunition: {
						brand: 'Ammunition brand'
					},
	
					modifications: {
						0: 'Not modified'
					}	
				}

			}

		});

		return Weapon;

	}

);
