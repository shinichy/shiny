/*jshint indent:2 */
/*global define, describe, it, expect, beforeEach, afterEach */

define(function (require) {
  'use strict';

  var SessionList = require('sessionList');
  var EditorView = require('editorView');

  describe('EditorView', function () {
    var view;

    beforeEach(function () {
      $('body').append('<div id="first-editor" class="editor"></div>');
      view = new EditorView({
        el: '#first-editor',
        collection: new SessionList()
      });
    });

    afterEach(function () {
      view.remove();
      $('#first-editor').remove();
    });

    describe('render', function () {
      it('returns the view object', function () {
        expect(view.render()).toEqual(view);
      });
    });
  });

});
