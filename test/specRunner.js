/*jshint indent:2 */
/*global define, require, jasmine */

require.config({
  baseUrl: '../src/',
  urlArgs: 'cb=' + Math.random(),
  paths: {
    ace: 'lib/ace',
    spec: '../test/spec/'
  }
});

require([], function () {

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function (spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/editorViewSpec');
  specs.push('spec/menuItemSpec');

  $(function () {
    require(specs, function () {
      jasmineEnv.execute();
    });
  });

});
