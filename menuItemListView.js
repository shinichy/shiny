/*jshint indent:2 */
/*global define, Backbone, _ */

define(function (require, exports, module) {
  'use strict';

  var MenuItemView = require('menuItemView');

  var MenuItemListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'menuItemList',

    initialize: function () {
      _.bindAll(this, 'appendItem');
      this.collection.on('add', this.appendItem);
    },
    appendItem: function (model) {
      var view = new MenuItemView({model: model,
        subMenuListView: new MenuItemListView(
        {collection: model.get('items')})});
      this.$el.append(view.render().el);
    }
  });

  module.exports = MenuItemListView;
});
