/*jshint indent:2 */
/*global define, require */

require.config({
  paths: {
    ace: 'lib/ace'
    // jschardet: 'lib/jschardet'
  }
  // load not AMD compliant modules
  // shim: {
  //   'jschardet': {
  //     exports: 'jschardet'
  //   }
  // }
});

define(function (require) {
  // Set global objects
  var DEBUG = true;
  var fn = Function, global = fn('return this')();
  global.DEBUG = DEBUG;

  var MenuManager = require('menu/menuManager');
  var GroupManager = require('groupManager');

  function _onReady() {

    GroupManager.init($('#main-view'));
    MenuManager.init($('#main-menu'));

    // init sidebar
    $('#dragbar').mousedown(function (e) {
      e.preventDefault();
      $(document).mousemove(function (e) {
        $('#sidebar').css('width', e.pageX + 2);
        $('#content').css('left', e.pageX + 2);
      });
    });
    $(document).mouseup(function () {
      $(document).unbind('mousemove');
    });
  }

  $(document).ready(_onReady);
});
