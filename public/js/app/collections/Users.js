define(['jquery','backbone','models/User'],

	function($, Backbone, User) {

		var Users = Backbone.Collection.extend({
			model: User
		});

		return Users;

	}

);