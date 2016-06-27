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
        '.tmp/js/config.js',
        '.tmp/js/templates.js',
        '.tmp/**/index.js',
        '.tmp/**/!*.js',
        '.tmp/**/*.js',
        'test/unit/**/*.spec.js'
    ]);

    return gulp.src(testFiles)
        .pipe($.karma({
            configFile: 'test/karma.conf.js',
            action: 'watch'
        }));
});
