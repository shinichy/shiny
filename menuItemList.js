/*jshint indent:2 */
/*global define, Backbone */

define(function (require, exports, module) {
  'use strict';

  var MenuItem = require('menuItem');

  var MenuItemList = Backbone.Collection.extend({
    model: MenuItem
  });

  module.exports = MenuItemList;
});
