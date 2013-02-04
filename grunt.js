/*jshint indent:2 */
/*global module, require */

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine : {
      all: ['test/index.html']
      // errorReporting: true
    },
    requirejs: {
      compile: {
        options: {
          appDir: './src',
          baseUrl: './',
          mainConfigFile: './src/shiny.js',
          dir: './build',
          modules: [
            {
              name: 'shiny'
            }
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-jasmine-task');

  grunt.registerTask('default', ['jasmine']);
  grunt.registerTask('build', ['requirejs']);
};
