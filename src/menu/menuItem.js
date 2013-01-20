/*jshint indent:2 */
/*global define, Backbone */

define(function (require, exports, module) {
  'use strict';

  var MenuItemList = require('menu/menuItemList');

  var MenuItem = Backbone.Model.extend({
    initialize: function () {
      this.set({items: new MenuItemList()});
    }
  });

  module.exports = MenuItem;
});
