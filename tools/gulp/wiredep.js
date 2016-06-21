'use strict';

var gulp = require('gulp');

/**
 * Задача реализует вставку пакетов bower в файл src/index.html
 * Описание здесь: https://www.npmjs.com/package/wiredep
 */
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    gulp.src('src/index.html')
        .pipe(wiredep({
            directory: 'bower_components'
        }))
        .pipe(gulp.dest('src'));
});
