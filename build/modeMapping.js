define(["require","exports","module"],function(e,t){var n={js:"ace/mode/javascript"},r=function i(e){return e.lastIndexOf(".")!==-1?i(e.substr(e.lastIndexOf(".")+1)):n[e]||"ace/mode/text"};t.getMode=r});