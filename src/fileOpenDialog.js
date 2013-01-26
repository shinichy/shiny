/*jshint indent:2 */
/*global define, Backbone, _ */

define(function (require, exports) {
  'use strict';

  var FileOpenDialog = Backbone.View.extend({
    tagName: 'input',
    className: 'dialog',
    attributes: {
      type: 'file'
    },
    events: {
      'change': 'changed'
    },
    initialize: function (options) {
      if (_.isFunction(options.onChange)) {
        this.onChange = options.onChange;
      }
    },
    open: function () {
      this.$el.trigger('click');
    },
    changed: function () {
      if (this.onChange) {
        this.onChange(this.el.files);
      }
    }
  });

  var open = function (handler) {
    var dialog = new FileOpenDialog({onChange: handler});
    dialog.open();
  };

  exports.open = open;
});
