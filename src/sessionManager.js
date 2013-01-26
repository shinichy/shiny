/*jshint indent:2 */
/*global define, _ */

define(function (require, exports, module) {
  'use strict';

  var Session = require('session');
  var SessionList = require('sessionList');
  var ModeMapping = require('modeMapping');

  var SessionManager = {
    init: function () {
      _.bindAll(this,
        'getSessionList',
        'createInitialSession',
        'setContent');
      this.sessionList = new SessionList();
    },
    createInitialSession: function () {
      var session = new Session({path: '', content: ''});
      this.sessionList.add(session);
    },
    getSessionList: function () {
      return this.sessionList;
    },
    setContent: function (path, content) {
      var session = this.sessionList.getActiveSession();
      session.set('path', path);
      session.get('editSession').setValue(content);
      session.get('editSession').setMode(ModeMapping.getMode(path));
    }
  };

  module.exports = SessionManager;
});
