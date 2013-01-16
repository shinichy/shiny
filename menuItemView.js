/*jshint indent:2 */
/*global define, Backbone, _ */

define(function (require, exports, module) {
  'use strict';

  var MenuItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'menuItem',
    events: {
      'click': 'activate'
    },
    initialize: function (options) {
      _.bindAll(this, 'activate');
      this.subMenuListView = options.subMenuListView;
    },
    render: function () {
      this.$el.html(_.template(
        $('#menuItem-template').html(),
        {name: this.model.get('name')}));
      return this;
    },
    activate: function () {
      console.log(this.subMenuListView.el);
    }
  });

  module.exports = MenuItemView;
});
