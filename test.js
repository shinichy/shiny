    console.log(typeof process);
    console.log(typeof window);
    console.log(typeof window.navigator);
global.window = undefined;
// global.navigator = navigator;
// global.document = document;
// global.location = location;

var requirejs = require('requirejs');

requirejs.config = ({
  nodeRequrie: require
});
// if (navigator) console.log(navigator);
var ace = requirejs('./lib/ace/ace.js');
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/javascript");
var Document = ace.require("ace/document");
console.log(Document);
