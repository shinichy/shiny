/*jshint indent:2 */
/*global define, describe, it, expect, beforeEach, afterEach */

define(function (require, exports, module) {
  'use strict';

  var MenuItem = require('menu/menuItem');
  var MenuItemList = require('menu/menuItemList');

  describe('MenuItemList', function () {
    var menuItemList;

    beforeEach(function () {
      menuItemList = new MenuItemList();
    });

    it('can add Model instances as objects and arrays.', function () {
      expect(menuItemList.length).toBe(0);

      menuItemList.add(new MenuItem({name: 'File'}));
      expect(menuItemList.length).toBe(1);

      menuItemList.add([
        new MenuItem({name: 'Edit'}),
        new MenuItem({name: 'Help'})
      ]);
      expect(menuItemList.length).toBe(3);
    });
  });
});
