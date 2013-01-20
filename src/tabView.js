define(function(require, exports, module) {
  TabView = Backbone.View.extend({
    tagName: 'li',
    events: {
      'click': 'activate'
    },
    initialize: function(options) {
    },
    render: function() {
      this.$el.html(_.template($('#tab-template').html(), {name: this.model.getName()}));
      return this;
    },
    activate: function() {
      this.model.set('isActivated', true);
    }
  });

  module.exports = TabView;
});
