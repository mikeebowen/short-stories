'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');

  //initialize grunt
  grunt.initConfig({

    // create jshint task
    jshint: {
      dev: {
        // tell jshint what check
        src: ['Gruntfile.js', 'server.js', 'lib/**/*.js', 'models/**/*.js', 'routes/**/*.js', '!build/**'],
        options: {
          node: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true,
            beforeEach: true,
            afterEach: true,
            res: true
          }
        }
      },

      mocha: {
        // tell mocha where test files are
        src: ['test/**/*.js'],
        options: {
          node: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true,
            beforeEach: true,
            afterEach: true,
            res: true
          }
        }
      },

      // create jscs task
      jscs: {
        dev: {
          // tell jscs to test the same files as jshint
          src: ['<%= jshint.dev.src %>', '<%= jshint.mocha.src %>']
        }
      }
    },

    //create simplemocha task
    simplemocha: {
      dev: {
        //tell simple mocha where the test files are
        src: ['test/**/*.js']
      }
    }

  });

  grunt.registerTask('lint', ['jshint:dev', 'jshint:mocha']);
  grunt.registerTask('mocha', ['simplemocha:dev']);
  grunt.registerTask('test', ['mocha']);
  grunt.registerTask('default', ['test']);

};
