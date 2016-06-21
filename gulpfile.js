'use strict';

var gulp = require('gulp');

require('require-dir')('./tools/gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
