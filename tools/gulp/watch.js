'use strict';

var gulp = require('gulp');

gulp.task('watch', ['config', 'wiredep', 'symbols', 'scripts', 'styles', 'partials'], function () {
    gulp.watch('src/assets/images/**/*', ['images']);
    gulp.watch('src/assets/styles/**/*.scss', ['styles']);
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/**/*.jade', ['partials']);
    gulp.watch('bower.json', ['wiredep']);
});
