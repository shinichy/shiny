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
    },
    // Please see https://github.com/jedrichards/rsyncwrapper for options.
    rsync: {
      dist: {
        src: './build/',
        dest: '/share/HDA_DATA/Qweb/shiny',
        host: 'admin@home.suplik.net',
        recursive: true,
        // Optional boolean, delete objects in dest that aren't present
        // in src. Take care with this option, since misconfiguration
        // could cause data loss. Maybe dryRun first?
        syncDest: true,
        exclude: ['.git*', '*.scss']
      }
    }
  });

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-rsync');
  grunt.loadNpmTasks('grunt-jasmine-task');

  grunt.registerTask('default', ['jasmine']);
  grunt.registerTask('deploy', ['requirejs', 'rsync']);
};
