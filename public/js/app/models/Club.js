define(['jquery', 'backbone'],

	function($, Backbone) {

		var Club = Backbone.Model.extend({
			className: 'Club',

			initialize: function() {

			},

			defaults: {
				name: 'Space City Hunt Club',
				coverphoto:	'http://placehold.it/350x350',

				location: {
					onlineOnly: false, // boolean used to determine whether location should display
					city: 'Houston',
					state: 'TX'
				},

				memberlist: 'load memberlist here' // collection of users 
			}

		});

		return Club;

	}

);
