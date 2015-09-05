// Karma configuration
// Generated on Thu Jul 02 2015 15:56:34 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
    __dirname + '/node_modules/phantomjs-polyfill/bind-polyfill.js',
    __dirname + '/node_modules/requirejs/require.js',
    __dirname + '/node_modules/karma-requirejs/lib/adapter.js',
    __dirname + '/test/karma_tests/*test.js'
    ],

    //plugins to start browsers
    plugins : [
    'karma-junit-reporter',
    'karma-phantomjs-launcher',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-opera-launcher',
    'karma-ie-launcher',
    'karma-jasmine',
    'karma-chai',
    'karma-webpack',
    'karma-requirejs',
    'karma-script-launcher'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/karma_tests/*test.js': ['webpack'],
        // 'test/**/*_test.js': ['webpack']
    },

    webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        module: {
          loaders: [{
            test: /\.jsx$/,
            loader:'jsx-loader'
          }]
        }
        },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Set timeout to 100 seconds
    // browserNoActivityTimeout: 100000
  });
};
