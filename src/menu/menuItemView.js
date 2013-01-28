/*jshint indent:2 */
/*global define, Backbone, _ */

define(function (require, exports, module) {
  'use strict';

  var MenuItemViewBase = Backbone.View.extend({
    tagName: 'li',
    events: {
      'click': 'activate'
    },
    initialize: function (options) {
      _.bindAll(this, 'activate');
      this.subMenuListView = options.subMenuListView;
    },
    render: function () {
      this.$el.html(_.template(MenuItemViewBase.getTemplate(this.templateId),
        {name: this.model.get('name')}));
      return this;
    },
    activate: function () {
      this.$el.append(this.subMenuListView.el);
      if (this.model.get('command')) {
        this.model.get('command').execute(this);
      }
    }
  }, {
    getTemplate: _.memoize(function (q) { return $(q).html(); })
  });

  var MainMenuItemView = MenuItemViewBase.extend({
    className: 'dropdown',
    templateId: '#main-menu-item'
  });

  var DropdownMenuItemView = MenuItemViewBase.extend({
    templateId: '#dropdown-menu-item'
  });

  module.exports.MainMenuItemView = MainMenuItemView;
  module.exports.DropdownMenuItemView = DropdownMenuItemView;
});
