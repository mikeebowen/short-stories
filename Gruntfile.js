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
      jasmine: {
        src: ['test/karma_tests/*test.js', 'app/js/*.js', 'app/js/*.js'],
        options: {
          node: true,
          jasmine: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true,
            beforeEach: true,
            afterEach: true,
            expect: true,
            react: true
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
        src: ['test/**/*.js', '!test/karma_tests/*']
      }
    },
    //create task to run karma
    karma: {
      test: {
        configFile: 'karma.conf.js'
      }
    },

    // register webpack task
    webpack: {
      client: {
        entry: __dirname + '/app/js/client.jsx',
        output: {
          path: 'build/',
          file: 'bundle.js'
        },
        module: {
          loaders: [
          {
            test: /\.jsx$/,
            loader:'jsx-loader'
          }]
        }
      },
      test: {
        entry: __dirname + '/test/client/test.js',
        output: {
          path: 'test/client/',
          file: 'bundle.js'
        }
      },
      karma_test: {
        entry: __dirname + '/test/karma_tests/test_entry.js',
        output: {
          path: 'test/karma_tests/',
          file: 'bundle.js'
        }
      }
    },

    copy: {
      html: {
        cwd: 'app/',
        expand: true,
        flatten: false,
        src: '**/*.html',
        dest: 'build/',
        filter: 'isFile'
      }
    },

    clean: {
      dev: {
        src: 'build/'
      }
    }

  });
  // register linting task
  grunt.registerTask('lint', ['jshint:dev', 'jshint:mocha', 'jshint:jasmine']);
  // register mocha test task
  grunt.registerTask('mocha', ['simplemocha:dev']);
  //register task for karma test
  grunt.registerTask('jasmine', ['karma:test']);
  // register test task for all tests
  grunt.registerTask('test', ['jasmine', 'mocha']);
  // register build task
  grunt.registerTask('build:dev', ['webpack:client', 'copy:html', 'webpack:test']);
  // register task for building karma tests
  grunt.registerTask('build:karma', ['webpack:karma_test']);
  // register build
  grunt.registerTask('build', ['build:dev', 'build:karma']);
  // register default task
  grunt.registerTask('default', ['test']);

};
