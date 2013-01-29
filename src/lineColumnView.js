/*jshint indent:2 */
/*global define, Backbone, _, $*/

define(function (require, exports, module) {
  'use strict';

  var mainView = require('mainView');

  var LineColumnView = Backbone.View.extend({
    initialize: function () {
      this.listenTo(mainView, 'change:activeEditorView', this.render);
      this.listenTo(mainView, 'change:selection', this.render);
    },
    render: function () {
      var pos = mainView.getActiveEditor().getCursorPosition();
      console.log(pos);
      this.$el.html(_.template(LineColumnView.template,
      {line: pos.row + 1, column: pos.column + 1}));
      return this;
    }
  }, {
    template: $('#line-column').html()
  });

  module.exports = LineColumnView;
});
