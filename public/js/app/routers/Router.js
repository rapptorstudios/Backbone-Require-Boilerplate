define([
	"jquery",
	"backbone",
	"models/Model",
	"views/View",
	"collections/Collection",
	// "modernizr",
	// "foundation.topbar"
	],

    function($, Backbone, Model, View, Collection) {
    		// $(document).foundation();

        var Router = Backbone.Router.extend({

            initialize: function() {

                Backbone.history.start();

            },

            routes: {
                "": "index"

            },

            index: function() {
                new View();

            }

        });

        return Router;

    }

);
