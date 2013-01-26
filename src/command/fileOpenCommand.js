/*jshint indent:2 */
/*global define */

define(function (require, exports) {
  'use strict';

  var FileOpenDialog = require('fileOpenDialog');
  var SessionManager = require('sessionManager');

  var execute = function () {
    FileOpenDialog.open(function (files) {
      var reader = new FileReader();
      (function (path) {
        reader.onload = function () {
          SessionManager.setContent(path, reader.result);
        };
      })(files[0].name);
      reader.onerror = function () {
        console.log(reader.error);
      };
      reader.readAsText(files[0]);
    });
  };

  exports.execute = execute;
});
