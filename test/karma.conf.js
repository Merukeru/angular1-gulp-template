// Karma configuration
// Generated on 2016-07-10

module.exports = function (config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        // as well as any additional frameworks (requirejs/chai/sinon/...)
        frameworks: [
            'jasmine'
        ],

        preprocessors: {
            'app/**/*.js': ['coverage'],
            'app/views/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/views/',
            moduleName: 'ngHtmlFiles'
        },

        coverageReporter: {
            type: 'html',
            dir: '_coverage'
        },

        htmlDetailed: {
            splitResults: false
        },

        // list of files / patterns to load in the browser
        files: [
            'dist/scripts/vendor*.js',
            {pattern: 'node_modules/angular/angular.js', watched: false},
            {pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false},
            {pattern: 'node_modules/angular-resource/angular-resource.js', watched: false},
            {pattern: 'node_modules/angular-cookies/angular-cookies.js', watched: false},
            {pattern: 'node_modules/angular-sanitize/angular-sanitize.js', watched: false},
            {pattern: 'node_modules/angular-route/angular-route.js', watched: false},
            'app/**/*.js',
            'test/spec/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
            //,'Chrome'
        ],

        // 'progress' is added by default
        // add 'htmlDetailed'
        reporters: ['progress', 'htmlDetailed', 'coverage'],

        // Which plugins to enable
        plugins: [
            'karma-coverage',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-html-detailed-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
