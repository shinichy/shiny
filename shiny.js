// Set global objects
global.ace = ace;

// var ace = require('./lib/ace/ace');
var fs = require('fs');
var jschardet = require('jschardet');
var gui = require('nw.gui');
var File = require('./file')

var win = gui.Window.get();

function _onReady () {
	// Save size on close.
	win.on('close', function() {
		localStorage.x      = win.x;
		localStorage.y      = win.y;
		localStorage.width  = win.width;
		localStorage.height = win.height;
		this.close(true);
	});

	// init editor
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/twilight");
	editor.getSession().setMode("ace/mode/javascript");

	function _chooseFile(name) {
		var chooser = $(name);
		chooser.trigger('click');
		chooser.change(function(evt) {
			var path = $(this).val();
			console.log(path);
			fs.readFile(path, function (err, buf) {
				if (err) {
					console.log(err);
					return;
				}
				var encoding = jschardet.detect(buf).encoding;
				if (encoding === 'SHIFT_JIS') {encoding = 'SJIS'}
				else if (encoding === 'EUC-JP') {encoding = 'EUCJP'}
				else if (encoding === 'ISO-2022-JP') {encoding = 'JIS'}
				console.log(encoding);

				var utf8Array = Encoding.convert(buf, 'UNICODE', encoding);
				var content = Encoding.codeToString(utf8Array);
				var file = new File(path, content);
				editor.getSession();
				editor.setValue(file.getDocument().getValue());
				// below code is so slow.
				// editor.getSession().setDocument(file.getDocument());
			})
		});
	}

	// create menus
	var menubar = new gui.Menu({type: "menubar"});
	var fileMenu = new gui.Menu()
	menubar.append(new gui.MenuItem({label: "File", submenu: fileMenu}))
	fileMenu.append(new gui.MenuItem({label: "Open...", click: function () {
		_chooseFile('#fileDialog')
	}}))

	var editMenu = new gui.Menu()
	menubar.append(new gui.MenuItem({label: "Edit", submenu: editMenu}))
	editMenu.append(new gui.MenuItem({label: "Undo", click: function () {
		alert('Undo')
	}}))
	win.menu = menubar

	$( "#sidebar" ).resizable({
		handles: 'e'
	});

	// Init tabs
	$('#tabs').tabs().find(".ui-tabs-nav").sortable({axis:'x'});

	// Restore last window size and position.
	if (localStorage.width && localStorage.height) {
		win.resizeTo(Number(localStorage.width), Number(localStorage.height));
		win.moveTo(Number(localStorage.x), Number(localStorage.y));
	}
	win.show();
}

$(document).ready(_onReady);
