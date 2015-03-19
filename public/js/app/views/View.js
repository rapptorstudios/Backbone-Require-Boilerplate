define(["jquery", "backbone", "models/Model", "text!templates/heading.html"],

    function($, Backbone, Model, template){

        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".example",

            initialize: function() {

                this.render();

            },

            events: {

            },

            render: function() {

                this.template = _.template(template, {});
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        return View;

    }

);