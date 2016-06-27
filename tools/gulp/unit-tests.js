'use strict';

var gulp = require('gulp');
var KarmaServer = require('karma').Server;

/**
 * Задача реализующая однократный запуск unit-тестов
 */
gulp.task('test-unit-once', ['preserve'], function (done) {
    new KarmaServer({
        configFile: __dirname + '/../../test/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Задача реализующая запуск unit-тестов и дальнейший перезапуск после изменений файлов проекта
 */
gulp.task('test-unit-tdd', ['preserve'], function (done) {
    new KarmaServer({
        configFile: __dirname + '/../../test/karma.conf.js',
    }, done).start();
});