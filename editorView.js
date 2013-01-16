define(function(require, exports, module) {
  EditorView = Backbone.View.extend({
    // el: $('#editor'),

    initialize: function(options) {
      _.bindAll(this, 'activeSessionChanged');
      this.collection.on('change:activeSession', this.activeSessionChanged);
    },

    activeSessionChanged: function(collection) {
      this.editor.setSession(collection.activeSession);
    }
  });

  module.exports = EditorView;
});
