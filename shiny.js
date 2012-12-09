var gui = require('nw.gui');

onload = function() {
  gui.Window.get().show();
}
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/javascript");
