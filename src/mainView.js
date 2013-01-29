/*jshint indent:2 */
/*global define, Backbone */

define(function (require, exports, module) {
  'use strict';

  var GroupView = require('groupView');
  var SessionManager = require('sessionManager');
  var EditorView = require('editorView');

  var MainView = Backbone.View.extend({
    el: '#main-view',
    initialize: function () {
      SessionManager.init();
      var sessionList = SessionManager.getSessionList();
      var editorView = new EditorView({
        el: '#first-editor',
        collection: sessionList
      });
      var groupView = new GroupView(
      {
        el: '#first-group',
        view: editorView
      });
      this.$el.append(groupView.render().el);

      this.listenTo(editorView, 'change:activeEditorView', function () {
        this.trigger('change:activeEditorView', editorView);
        this.activeEditorView = editorView;
      });
      this.listenTo(editorView, 'change:selection', function () {
        if (this.activeEditorView == editorView) {
          this.trigger('change:selection');
        }
      });

      SessionManager.createInitialSession();
    },
    getActiveEditor: function () {
      return this.activeEditorView.getActiveEditor();
    },
    getActiveEditorView: function () {
      return this.activeEditorView;
    }
  });

  var instance = new MainView();

  module.exports = instance;
});
