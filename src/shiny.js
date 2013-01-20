/*jshint indent:2 */
/*global define, require */

require.config({
  paths: {
    ace: 'lib/ace',
    encoding: 'lib/encoding'
  },
  // load not AMD compliant modules
  shim: {
    'encoding': {
      exports: 'encoding'
    }
  }
});

define(function (require) {
  var ace = require('ace/ace');

  // Set global objects
  var DEBUG = true;
  var fn = Function, global = fn('return this')();
  global.DEBUG = DEBUG;

  var SessionList = require('sessionList');
  var TabListView = require('tabListView');
  var EditorView = require('editorView');
  var MenuManager = require('menu/menuManager');

  function _onReady() {
    // init editor
    var editor = ace.edit('editor');
    editor.setTheme('ace/theme/twilight');
    editor.getSession().setMode('ace/mode/javascript');
    var sessionList = new SessionList();
    var editorView = new EditorView({
      editor: editor,
      collection: sessionList
    });

    MenuManager.init($('#main-menu'));

    var tabListView = new TabListView({
      el: $('#tabbar'),
      collection: sessionList
    });

    // init file dialog
    $('#fileDialog').change(function (evt) {
      console.log(evt);
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

    // init sidebar
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
  }

  $(document).ready(_onReady);
});
