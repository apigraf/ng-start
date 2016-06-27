'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep');

/**
 * Задача реализующая запуск unit-тестов
 */
gulp.task('test-unit', function () {
    var bowerDeps = wiredep({
        directory: 'bower_components',
        dependencies: true,
        devDependencies: true
    });

    var testFiles = bowerDeps.js.concat([
        '.dist-dev/js/config.js',
        '.dist-dev/js/templates.js',
        '.dist-dev/**/index.js',
        '.dist-dev/**/!*.js',
        '.dist-dev/**/*.js',
        'test/unit/**/*.spec.js'
    ]);

    return gulp.src(testFiles)
        .pipe($.karma({
            configFile: 'test/karma.conf.js',
            action: 'watch'
        }));
});
