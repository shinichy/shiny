var gui = require('nw.gui');
var fs = require('fs')
var jschardet = require('jschardet')

var win = gui.Window.get();

onload = function() {
	if (localStorage.width && localStorage.height) {
		win.resizeTo(Number(localStorage.width), Number(localStorage.height));
		win.moveTo(Number(localStorage.x), Number(localStorage.y));
	}
	win.show();
}

// Save size on close.
win.on('close', function() {
	localStorage.x      = win.x;
	localStorage.y      = win.y;
	localStorage.width  = win.width;
	localStorage.height = win.height;
	this.close(true);
});

// init Ace
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/javascript");

// create menus
var menubar = new gui.Menu({type: "menubar"});
var fileMenu = new gui.Menu()
menubar.append(new gui.MenuItem({label: "File", submenu: fileMenu}))
fileMenu.append(new gui.MenuItem({label: "Open...", click: function () {
	chooseFile('#fileDialog')
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

function chooseFile(name) {
	var chooser = $(name);
	chooser.trigger('click');
	chooser.change(function(evt) {
		console.log($(this).val());
		fs.readFile($(this).val(), function (err, buf) {
			if (err) {
				console.log(err)
				return
			}
			var encoding = jschardet.detect(buf).encoding
			if (encoding === 'SHIFT_JIS') {encoding = 'SJIS'}
			else if (encoding === 'EUC-JP') {encoding = 'EUCJP'}
			else if (encoding === 'ISO-2022-JP') {encoding = 'JIS'}
			console.log(encoding)

			var utf8Array = Encoding.convert(buf, 'UNICODE', encoding)
			var content = Encoding.codeToString(utf8Array)
			editor.setValue(content)
		})
	});
}
