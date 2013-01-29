/*jshint indent:2 */
/*global define, Backbone */

define(function (require, exports, module) {
  'use strict';

  var LineColumnView = require('lineColumnView');

  var StatusBar = Backbone.View.extend({
    initialize: function () {
      this.addView(new LineColumnView());
    },
    addView: function (view) {
      this.$el.append(view.render().el);
    }
  });

  module.exports = StatusBar;
});
