'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/**
 * Задача реализующая загрузку web-драйвера selenium
 */
gulp.task('webdriver-update', $.protractor.webdriver_update);

gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

/**
 * Задача реализующая запуск protractor
 */
gulp.task('protractor', ['webdriver-update', 'wiredep'], function (done) {
    gulp.src('test/e2e/**/*.js')
        .pipe($.protractor.protractor({
            configFile: 'test/protractor.conf.js'
        }))
        .on('error', function (err) {
            throw err;
        })
        .on('end', function () {
            done();
        });
});

/**
 * Задача реализующая запуск e2e-тестов проекта запущенного на сервере разработки
 */
gulp.task('test-e2e-src', ['serve', 'protractor']);

/**
 * Задача реализующая запуск e2e-тестов собранного проекта
 */
gulp.task('test-e2e-dist', ['serve-dist', 'protractor']);
