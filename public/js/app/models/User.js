define(['jquery', 'backbone'],

	function($, Backbone) {

		var User = Backbone.Model.extend({
			className: 'User',

			initialize: function() {

			},

			defaults: {
				firstname: 'John',
				lastname: 'Smith',
				city: 'Greenville',
				state: 'SC',
				profilephoto: 'http://placehold.it/50x50',
				coverphoto: 'http://placehold.it/150x150',

				rank: {
					duckrank: 10,
					deerrank: 3
				},

				weapons: {
					0: {
						name: 'Wellington Automatic Rifle',
						photo: 'http://placehold.it/50x50'
					}
				},

				clubs: {
					0: {
						name: 'South Carolina Hunt Club',
						photo: 'http://placehold.it/50x50'
					},

					1: {
						name: 'Georgia Anglers',
						photo: 'http://placehold.it/50x50'
					}
				},

				friends: 'George Washington'		
			},

			validate: function(attrs) {

			}

		});

		return User;

	}

);
