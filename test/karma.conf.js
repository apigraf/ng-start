var mainBowerFiles = require('main-bower-files');
var _ = require('lodash');

module.exports = function (config) {
    config.set({
        basePath: '..',

        files: _.concat(mainBowerFiles(
            {
                "overrides": {
                    "modernizr": {
                        "main": "modernizr.js"
                    }
                }
            }),
            [
                '.dist-dev/js/config.js',
                '.dist-dev/js/templates.js',
                '.dist-dev/**/index.js',
                '.dist-dev/**/!*.js',
                '.dist-dev/**/*.js',
                'test/unit/**/*.spec.js'
            ]
        ),

        // autoWatch: true,
        // singleRun: false,
        colors: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};