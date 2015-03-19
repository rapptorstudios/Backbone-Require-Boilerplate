define([
	"jquery",
	"backbone",
	"models/Model",
	"views/View",
	"views/CoolView",
	"collections/Collection"
	// "modernizr",
	// "foundation.topbar"
	],

    function($, Backbone, Model, View, CoolView, Collection) {
    		// $(document).foundation();

        var Router = Backbone.Router.extend({

            initialize: function() {

                Backbone.history.start();

            },

            routes: {
                "": "index",
                "cool": "renderCool"

            },

            index: function() {
                new View();

            },

            renderCool: function(){
            	new CoolView();
            }

        });

        return Router;

    }

);
