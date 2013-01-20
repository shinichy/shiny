define(function(require, exports, module) {
  // var ace = require('ace');
  // var EditSession = ace.require('ace/edit_session').EditSession;
  var EditSession = require('ace/edit_session').EditSession;
  var ModeMapping = require('modeMapping');
  // var path = require('path');

  var Session = Backbone.Model.extend({
    defaults: {
      isActivated: false
    },
    // // validate: function(attrs) {
    // //   DEBUG && console.log('init start');
    // // },
    // onError_: function(model, error) {
    //   console.log(error);
    // },
    initialize: function(attrs) {
      // _.bindAll(this, 'onError_');
      // this.on('error', this.onError_);
      this.set('file', Ti.Filesystem.getFile(attrs.path));
      this.set('session', new EditSession(attrs.content, ModeMapping.getMode(this.get('file').extension())));
      delete attrs.path;
      delete attrs.content;
    },
    getName: function() {
      var path = this.get('file').nativePath();
      var pos = path.lastIndexOf(Ti.Filesystem.getSeparator());
      assert(pos >= 0 && pos < path.length - 1);
      return path.slice(pos + 1);
    }
  });

  module.exports = Session;
});
