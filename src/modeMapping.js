define(function(require, exports, module) {
  var _modeMapping = {
    '.js': 'ace/mode/javascript'
  };

  var getMode = function(ext) {
    if (!ext) {throw 'ext is ' + ext;}

    return _modeMapping[ext] || 'ace/mode/text';
  };

  module.exports.getMode = getMode;
});
