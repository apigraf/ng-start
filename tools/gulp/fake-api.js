'use strict';

var gulp = require('gulp');
var jsonServer = require('gulp-json-srv');

var server = jsonServer.start({
    data: 'fake-api/db.json',
    port: 8800,
    baseUrl: '/fake-api',
    deferredStart: true
});

/**
 * Задача реализующая перезагрузку фейкового API при изменениях fake-api/db.json
 */
gulp.task('watch-fake-api', function () {
    gulp.watch(['fake-api/db.json'], function(){
        server.reload(); // TODO: Разобраться почему не работает
    });
});

/**
 * Задача реализующая фейковый API
 */
gulp.task('fake-api', ['watch-fake-api'], function () {
    server.start();
});
