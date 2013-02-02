/*jshint indent:2 */
/*global define, Backbone */

define(function (require, exports, module) {
  var EditSession = require('ace/edit_session').EditSession;
  var ModeMapping = require('modeMapping');

  module.exports = Backbone.Model.extend({
    defaults: {
      isActivated: false
    },
    initialize: function (attrs) {
      this.set('path', attrs.path);
      this.set('editSession', new EditSession(
        attrs.content, ModeMapping.getMode(attrs.path)));
      delete attrs.path;
      delete attrs.content;
    }
  });
});
