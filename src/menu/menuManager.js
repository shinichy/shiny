/*jshint indent:2 */
/*global define */

define(function (require, exports) {
  'use strict';

  var MenuItem = require('menu/menuItem');
  var MenuItemList = require('menu/menuItemList');
  var MainMenuItemListView = require('menu/menuItemListView');
  var FileOpenCommand = require('command/fileOpenCommand');

  function init(mainMenu) {
    var mainMenuList = new MenuItemList();
    var mainMenuView = new MainMenuItemListView({el: mainMenu,
      collection: mainMenuList});
    var fileMenu = new MenuItem({name: 'File'});
    mainMenuList.add(fileMenu);
    fileMenu.get('items').add(new MenuItem({name: 'New'}));

    fileMenu.get('items').add(new MenuItem({name: 'Open',
      command: FileOpenCommand}));

    mainMenuList.add(new MenuItem({name: 'Edit'}));
  }

  exports.init = init;
});
