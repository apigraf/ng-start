var mainBowerFiles = require('main-bower-files');
var _ = require('lodash');

module.exports = function (config) {
    config.set({
        basePath: '..',

        // TODO: Не коректно идёт подгрузка. Возможно, стоит использовать gulp-karma
        // (тогда заоднем и protractor можно в gulp перенести - будет проще контролировать)
        files: _.concat(mainBowerFiles(
            {
                "overrides": {
                    "modernizr": {
                        "main": "modernizr.js"
                    }
                }
            }),
            [
                'src/filters/index.js',
                'src/services/index.js',
                'src/controllers/index.js',
                'src/directives/index.js',
                'src/components/index.js',
                'src/states/index.js',

                'src/**/*.js',
                'src/app.js',

                'test/unit/**/*.js'
            ]
        ),

        autoWatch: true,
        singleRun: false,
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