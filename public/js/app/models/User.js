define(['jquery', 'backbone'],

	function($, Backbone) {

		var User = Backbone.Model.extend({
			className: 'User',

			initialize: function() {

			},

			defaults: {
					city: 'metropolis',
					username: 'deadpool'
			},

			validate: function(attrs) {

			}

		});

		return User;

	}

);
