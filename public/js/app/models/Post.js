define(['jquery', 'backbone'],

	function($, Backbone) {

		var Post = Backbone.Model.extend({
			className: 'Post',

			initialize: function() {

			},

			defaults: {
				authorinfo: {
					name: 	'Frank Warren',
					photo: 	'http://placehold.it/50x50',
					date: 	'June 1, 2015'
				},

				comment: {
					name: 	'Sally Heinz',
					photo: 	'http://placehold.it/50x50',
					date: 	'June 1, 2015',
					message: 'Hey there!!'
				}
			}

		});

		return Post;

	}

);
