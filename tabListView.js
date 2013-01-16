define(function(require, exports, module) {
  TabListView = Backbone.View.extend({
    initialize: function(options) {
      _.bindAll(this, 'appendItem');
      this.collection.on('add', this.appendItem);
    },
    appendItem: function(model) {
      var view = new TabView({model: model});
      this.$el.append(view.render().el);
    }
  });

  module.exports = TabListView;
});
