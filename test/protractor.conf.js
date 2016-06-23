exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/**/*.js'
    ],

    seleniumServerJar: '../node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.0.jar',

    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': './node_modules/phantomjs-prebuilt/bin/phantomjs'
    },

    baseUrl: 'http://localhost:3000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};