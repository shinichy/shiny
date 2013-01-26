/*jshint indent:2 */
/*global define, Backbone, _, $ */

define(function (require, exports, module) {
  'use strict';

  var GroupView = Backbone.View.extend({
    className: 'group',
    initialize: function (options) {
      this.$el.append(options.editorView.render().el);
    }
  });

  module.exports = GroupView;
});
