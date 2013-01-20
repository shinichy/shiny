/*jshint indent:2 */
/*global define, Backbone, _ */

define(function (require, exports, module) {
  'use strict';

  var MainMenuItemView = require('menuItemView').MainMenuItemView;
  var DropdownMenuItemView = require('menuItemView').DropdownMenuItemView;

  var MenuItemListViewBase = Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
      _.bindAll(this, 'appendItem');
      this.collection.on('add', this.appendItem);
    },
    appendItem: function (model) {
      var view = new this.menuItemView({model: model,
        subMenuListView: new DropdownMenuItemListView(
        {collection: model.get('items')})});
      if (this.className == 'nav') {
        view.className = 'dropdown';
      }
      this.$el.append(view.render().el);
    }
  });

  var MainMenuItemListView = MenuItemListViewBase.extend({
    menuItemView: MainMenuItemView
  });

  var DropdownMenuItemListView = MenuItemListViewBase.extend({
    className: 'dropdown-menu',
    menuItemView: DropdownMenuItemView
  });

  module.exports = MainMenuItemListView;
});
