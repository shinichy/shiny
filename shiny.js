/*jshint indent:2 */
/*global define, require */

require.config({
  paths: {
    ace: 'lib/ace',
    // jquery: 'lib/jquery-1.8.3.min',
    jqueryui: 'lib/jquery-ui-1.9.2.custom.min',
    encoding: 'lib/encoding'
    // underscore: 'lib/underscore-min',
    // backbone: 'lib/backbone-min'
  },
  // load not AMD compliant modules
  shim: {
    // 'underscore': {
    //   exports: '_'
    // },
    // 'backbone': {
    //   deps: ['underscore', 'jquery'],
    //   exports: 'Backbone'
    // },
    'encoding': {
      exports: 'encoding'
    }
  }
});

define(function (require) {
  var ace = require('ace/ace');
  require('jqueryui');

  // Set global objects
  var DEBUG = true;
  var fn = Function, global = fn('return this')();
  global.DEBUG = DEBUG;
  // global.$ = $;
  // global._ = _;
  // global.ace = ace;
  // global.Backbone = Backbone;

  // var ace = require('./lib/ace/ace');
  // var fs = require('fs');
  // var jschardet = require('jschardet');
  // var gui = require('nw.gui');
  var Session = require('session');
  var SessionList = require('sessionList');
  var TabView = require('tabView');
  var TabListView = require('tabListView');
  var EditorView = require('editorView');
  var MenuItem = require('menuItem');
  var MenuItemList = require('menuItemList');
  var MenuItemListView = require('menuItemListView');

  // var win = gui.Window.get();

  function _onReady() {
  //   // Save size on close.
  //   // win.on('close', function() {
  //   //   localStorage.x = win.x;
  //   //   localStorage.y = win.y;
  //   //   localStorage.width = win.width;
  //   //   localStorage.height = win.height;
  //   //   this.close(true);
  //   // });

    // init editor
    var editor = ace.edit('editor');
    editor.setTheme('ace/theme/twilight');
    editor.getSession().setMode('ace/mode/javascript');
    var sessionList = new SessionList();
    var editorView = new EditorView({
      editor: editor, collection: sessionList});

    var mainMenu = new MenuItemList();
    var mainMenuView = new MenuItemListView({el: $('#main-menu'),
      collection: mainMenu});
    var fileMenu = new MenuItem({name: 'File'});
    mainMenu.add(fileMenu);
    fileMenu.get('items').add(new MenuItem({name: 'New'}));
    fileMenu.get('items').add(new MenuItem({name: 'Open'}));
    mainMenu.add(new MenuItem({name: 'Edit'}));
    var tabListView = new TabListView({
      el: $('#tab-list'),
      collection: sessionList});

    // init file dialog
    $('#fileDialog').change(function(evt) {
    });

    // create menus
    // var menubar = new gui.Menu({type: 'menubar'});
    // var fileMenu = new gui.Menu();
    // menubar.append(new gui.MenuItem({label: 'File', submenu: fileMenu}));
    // fileMenu.append(new gui.MenuItem({label: 'Open...', click: function() {
    //   $('#fileDialog').trigger('click');
    // }}));
    // var menu = Ti.UI.createMenu();
    // var fileMenu = Ti.UI.createMenuItem('File');
    // fileMenu.addItem('Open....', function() {
    //   Ti.UI.currentWindow.openFileChooserDialog(function(args) {
    //     if (args.length == 0) {return;}

    //     var path = args[0];
    //     console.log(path);
    //     fs.readFile(path, function(err, buf) {
    //       if (err) {
    //         console.log(err);
    //         return;
    //       }
    //       // var encoding = jschardet.detect(buf).encoding;
    //       // if (encoding === 'SHIFT_JIS') {encoding = 'SJIS';}
    //       // else if (encoding === 'EUC-JP') {encoding = 'EUCJP';}
    //       // else if (encoding === 'ISO-2022-JP') {encoding = 'JIS';}
    //       // console.log(encoding);
    //       var encoding = 'UTF8';

    //       var utf8Array = Encoding.convert(buf, 'UNICODE', encoding);
    //       var content = Encoding.codeToString(utf8Array);
    //       var session = new Session({path: path, content: content});
    //       sessionList.add(session);
    //       // editor.setSession(session.get('session'));
    //     });
    //   }, {multiple: false});
    // });
    // menu.appendItem(fileMenu);
    // console.log('set menu');
    // Ti.UI.currentWindow.menu = menu;

  //   var editMenu = new gui.Menu();
  //   menubar.append(new gui.MenuItem({label: 'Edit', submenu: editMenu}));
  //   editMenu.append(new gui.MenuItem({label: 'Undo', click: function() {
  //     alert('Undo');
  //   }}));
  //   win.menu = menubar;

    $('#dragbar').mousedown(function (e) {
      e.preventDefault();
      $(document).mousemove(function (e) {
        $('#sidebar').css('width', e.pageX + 2);
        $('#content').css('left', e.pageX + 2);
      });
    });
    $(document).mouseup(function () {
      $(document).unbind('mousemove');
    });

  //   // Init tabs
  $('#tabs').tabs().find('.ui-tabs-nav').sortable({axis: 'x'});

  //   // Restore last window size and position.
  //   if (localStorage.width && localStorage.height) {
  //     win.resizeTo(Number(localStorage.width), Number(localStorage.height));
  //     win.moveTo(Number(localStorage.x), Number(localStorage.y));
  //   }
  //   win.show();
}

$(document).ready(_onReady);
});
