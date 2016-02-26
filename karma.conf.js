// Karma configuration
// Generated on Tue Nov 17 2015 18:23:24 GMT-0500 (Eastern Standard Time)
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            //Dependencies
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'node_modules/underscore/underscore.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/restangular/src/restangular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-cookies/angular-cookies.js',

            //Module Files
            'public/js/main.js',
            'public/js/body/body.js',
            'public/js/header/header.js',
            'public/js/login/login.js',
            'public/js/sidePanel/sidePanel.js',

            //Rest of application files
            'public/js/**/*.js',

            //Test files
            'public/test/**/*.js'
        ],


        // list of files to exclude
        exclude: [
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress','coverage'],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'public/js/**/*.js': ['coverage']
        },

        coverageReporter:{
            dir: 'jasmineReports',
            reporters: [
                {type: 'html', subdir: 'report-html'},
                {type: 'cobertura', subdir: 'report-cobertura'}
            ]
        },

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
        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-jasmine'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    })
};
