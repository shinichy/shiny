/*jshint indent:2 */
/*global define */

define(function (require, exports) {
  var _modeMapping = {
    'js': 'ace/mode/javascript'
  };

  var getMode = function getMode(ext) {
    if (ext.lastIndexOf('.') !== -1) {
      return getMode(ext.substr(ext.lastIndexOf('.') + 1));
    }

    return _modeMapping[ext] || 'ace/mode/text';
  };

  exports.getMode = getMode;
});
