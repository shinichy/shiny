/*jshint indent:2 */
/*global module, require */

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      test: {
        port: 8000
      }
    },
    jasmine: {
      tests: {
        options: {
          specs: 'test/spec/**/*Spec.js',
          vendor: [
            'src/lib/jquery-1.8.3.min.js',
            'src/lib/underscore-min.js',
            'src/lib/backbone-min.js',
            'src/lib/bootstrap.js'],
          host: 'http://127.0.0.1:<%= connect.test.port %>/',
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfig: {
              baseUrl: 'src/',
              paths: {
                ace: 'lib/ace'
              }
            }
          }
        }

      }
    },
    requirejs: {
      compile: {
        options: {
          appDir: './src',
          baseUrl: './',
          mainConfigFile: './src/shiny.js',
          dir: './build',
          modules: [{
            name: 'shiny'
          }]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'jasmine']);
  grunt.registerTask('build', ['requirejs']);
};
