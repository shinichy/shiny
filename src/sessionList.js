/*jshint indent:2 */
/*global define, Backbone, _ */

define(function (require, exports, module) {
  var Session = require('session');

  var SessionList = Backbone.Collection.extend({
    model: Session,

    initialize: function () {
      _.bindAll(this,
        'getActiveSession',
        'setActiveSession',
        'handleActiveSession',
        'changeActiveSession');
      this.on('change:isActivated', this.changeActiveSession);
      this.on('add', this.handleActiveSession);
    },
    getActiveSession: function () {
      return this.activeSession;
    },
    getActiveEditSession: function () {
      return this.activeSession.get('editSession');
    },
    setActiveSession: function (session) {
      this.activeSession = session;
      this.trigger('change:activeSession');
    },
    handleActiveSession: function  (model) {
      if (this.length === 1) {
        this.setActiveSession(model);
      }
    },
    changeActiveSession: function (model, value) {
      if (!value) {return; }

      if (this.activeSession) {
        this.activeSession.set('isActivated', false, {silent: true});
      }
      this.setActiveSession(model);
    }
  });

  module.exports = SessionList;
});
