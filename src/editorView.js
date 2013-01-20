/*jshint indent:2 */
/*global define, Backbone, _ */

define(function (require, exports, module) {
  'use strict';

  var EditorView = Backbone.View.extend({
    // el: $('#editor'),

    initialize: function () {
      _.bindAll(this, 'activeSessionChanged');
      this.collection.on('change:activeSession', this.activeSessionChanged);
    },

    activeSessionChanged: function (collection) {
      this.editor.setSession(collection.activeSession);
    }
  });

  module.exports = EditorView;
});
