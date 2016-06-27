'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var modRewrite = require('connect-modrewrite');
var del = require('del');
var runSequence = require('run-sequence').use(gulp);

/**
 * Задачи обеспечивающие зауск дочерних задач перед перезагрузкой браузера
 */
gulp.task('styles-watch', ['styles'], function () {
    return gulp.src('.dist-dev/**/*.css').pipe(browserSync.reload({stream:true}));
});
gulp.task('scripts-watch', ['scripts'], function () {
    browserSync.reload();
});
gulp.task('partials-watch', ['partials'], function () {
    browserSync.reload();
});
gulp.task('images-watch', ['images'], function () {
    browserSync.reload();
});
gulp.task('fonts-watch', ['fonts'], function () {
    browserSync.reload();
});
gulp.task('wiredep-watch', ['wiredep'], function () {
    browserSync.reload();
});

/**
 * Инициализация сервера
 * @param baseDir
 */
function browserSyncInit(baseDir) {
    browserSync.init({
        startPath: '/',
        server: {
            baseDir: baseDir,
            routes: {
                "bower_components": "/bower_components"
            }
        },
        middleware: [
            modRewrite(['!\.html|\.js|\.css|\.png|\.jpg|\.svg|\.ttf$ /index.html [L]'])
        ],
        port: 3002,
        browser: 'default',
        ghostMode: false
    });
}

/**
 * Запускаем задачи "перезагрузки браузера" при изменении файлов проекта
 */
function addWatchers() {
    gulp.watch('src/assets/styles/**/*.scss', ['styles-watch']);
    gulp.watch('src/assets/images/**/*', ['images-watch']);
    gulp.watch('src/assets/fonts/**/*', ['fonts-watch']);
    gulp.watch('src/**/*.js', ['scripts-watch']);
    gulp.watch('src/**/*.jade', ['partials-watch']);
    gulp.watch('bower.json', ['wiredep-watch']);
    gulp.watch('src/index.html', browserSync.reload);
    gulp.watch('.dist-dev/js/config.js', browserSync.reload);
}

/**
 * Задача, запускающая сервер разработки
 */
gulp.task('serve', ['preserve'], function () {
    browserSyncInit(['.dist-dev', 'src']);
    addWatchers();
});

/**
 * Задача, запускающая сервер с собранным проектом
 */
gulp.task('serve-dist', ['build'], function () {
    browserSyncInit('dist');
    addWatchers();
});

/**
 * Задача, запускающая сервер разработки вместе с фейковым API
 */
gulp.task('demo', function(callback) {
    runSequence(
        'fake-api',
        'serve',
        callback
    );
});