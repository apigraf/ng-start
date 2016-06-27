exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        './e2e/**/*.js'
    ],

    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },

    baseUrl: 'http://localhost:3002/',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true,

        // Убираем стандартный вывод, если используем репортер
        print: function() {
        }
    },

    // Для наглядности будем использовать репортер
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');

        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all'
        }));
    }
};