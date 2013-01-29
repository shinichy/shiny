/*jshint indent:2 */
/*global define, Backbone */

define(function (require, exports, module) {
  'use strict';

  var GroupView = Backbone.View.extend({
    className: 'group',
    initialize: function (options) {
      this.$el.append(options.view.render().el);
    }
  });

  module.exports = GroupView;
});
