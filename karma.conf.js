module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        // files to be included in the browser and watched / served by Karma
        files: [
            'src/**/*.ts',
            'test/**/*.ts'
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        // test results reporter to use
        reporters: ['progress', 'kjhtml'],
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // start these browsers
        browsers: ['Chrome'],
        // Continuous Integration mode
        restartOnFileChange: true,
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        concurrency: Infinity
    });
};

