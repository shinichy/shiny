/*jshint indent:2 */
/*global define, Backbone, _ */

define(function (require, exports, module) {
  'use strict';

  var ace = require('ace/ace');

  var EditorView = Backbone.View.extend({
    initialize: function () {
      _.bindAll(this, 'activeSessionChanged');
      this.editor = ace.edit(this.el);
      this.editor.setTheme('ace/theme/twilight');
      this.editor.getSession().setMode('ace/mode/javascript');
      this.collection.on('change:activeSession', this.activeSessionChanged);
    },

    activeSessionChanged: function () {
      this.editor.setSession(
        this.collection.getActiveEditSession());
    }
  });

  module.exports = EditorView;
});
