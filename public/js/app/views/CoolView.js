define(["jquery", "backbone", "models/Model", "text!templates/cool.html"],

    function($, Backbone, Model, template){

        var CoolView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".main-container",

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

        return CoolView;

    }

);