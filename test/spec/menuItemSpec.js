/*jshint indent:2 */
/*global define, describe, it, expect, beforeEach, afterEach */

define(function (require, exports, module) {
  'use strict';

  var MenuItem = require('menu/menuItem');

  describe('MenuItem', function () {
    var menuItem;

    beforeEach(function () {
      menuItem = new MenuItem();
    });

    it('has items property', function () {
      expect(menuItem.get('items')).not.toBeUndefined();
    });
  });
});
