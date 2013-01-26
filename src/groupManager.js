/*jshint indent:2 */
/*global define */

define(function (require, exports, module) {
  'use strict';

  var GroupView = require('groupView');
  var SessionManager = require('sessionManager');
  var EditorView = require('editorView');

  var GroupManager = {
    init: function (parent) {
      SessionManager.init();
      var sessionList = SessionManager.getSessionList();
      var editorView = new EditorView({
        el: '#first-editor',
        collection: sessionList
      });
      var groupView = new GroupView(
        {
          el: '#first-group',
          editorView: editorView
        });
      parent.append(groupView.render().el);
      SessionManager.createInitialSession();
    }
  };

  module.exports = GroupManager;
});
