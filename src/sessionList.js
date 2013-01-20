define(function(require, exports, module) {
  var Session = require('session');

  var SessionList = Backbone.Collection.extend({
    model: Session,

    initialize: function(models) {
      _.bindAll(this, 'changeActiveSession');
      this.on('change:isActivated', this.changeActiveSession);
    },

    changeActiveSession: function(model, value) {
      if (!value) {return;}

      if (this.activeSession) {
        this.activeSession.set('isActivated', false);
      }
      this.activeSession = model;
    }
  });

  module.exports = SessionList;
});
