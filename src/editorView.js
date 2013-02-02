/*jshint indent:2 */
/*global define, Backbone, _ */

define(function (require, exports, module) {
  'use strict';

  var ace = require('ace/ace');

  module.exports = Backbone.View.extend({
    initialize: function () {
      _.bindAll(this, 'activeSessionChanged');
      this.editor = ace.edit(this.el);
      this.editor.setTheme('ace/theme/twilight');
      this.editor.getSession().setMode('ace/mode/javascript');
      this.editor.addEventListener('changeSelection', (function (view) {
        return function () {
          view.trigger('change:selection');
        };
      })(this));
      this.collection.on('change:activeSession', this.activeSessionChanged);
    },
    activeSessionChanged: function () {
      this.editor.setSession(
        this.collection.getActiveEditSession());
      this.trigger('change:activeEditorView', this);
    },
    getActiveEditor: function () {
      return this.editor;
    },
    getActiveEditSession: function () {
      return this.collection.getActiveEditSession();
    }
  });
});
