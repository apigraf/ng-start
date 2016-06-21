var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence').use(gulp);
var fs = require('fs');
var $ = require('gulp-load-plugins')();
var env = gutil.env.env ? gutil.env.env : 'dev';
var config = JSON.parse(fs.readFileSync('config/environments/' + env + '.json', 'utf-8'));
var del = require('del');

gutil.log(gutil.colors.yellow('ENV is: ' + env));

/**
 * Задача сборки стилей проекта
 */
gulp.task('styles', function () {
    return gulp.src('src/assets/styles/main.scss')
        .pipe($.sass({
            includePaths: ['src/assets/styles/'],
            outputStyle: 'expanded'
        }))
        .pipe($.autoprefixer())
        .pipe(gulp.dest('.tmp/styles'))
});

/**
 * Задача сборки скриптов проекта
 */
gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        //.pipe($.traceur()) // не будет работать под Windows
        .pipe(gulp.dest('.tmp'))
        .pipe($.size());
});

/**
 * Задача сборки шаблонов проекта
 */
gulp.task('partials', function () {
    return gulp.src(['src/**/*.jade'])
        .pipe($.jade())
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true,
            loose: true
        }))
        .pipe($.templateCompile())
        .pipe($.concat('templates.js'))
        .pipe(gulp.dest(".tmp/js"))
        .pipe($.size());
});

/**
 * Задача сборки проекта, хеширование ассетов
 */
gulp.task('html', ['styles', 'scripts', 'partials'], function () {
    var jsFilter = $.filter('**/*.js', {restore: true});
    var cssFilter = $.filter('**/*.css', {restore: true});

    return gulp.src(['src/index.html'])
        .pipe(jsFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore)
        .pipe($.useref())
        .pipe(gulp.dest('.dist-tmp'))
        .pipe($.size());
});

/**
 * Задача копирования изображений проекта и их оптимизация
 */
gulp.task('images', function () {
    return gulp.src(['src/assets/images/**/*'])
        .pipe(gulp.dest('.tmp/images'))
        .pipe($.size());
});

/**
 * Задача копирования шрифтов проекта
 */
gulp.task('fonts', function () {
    return gulp.src(['src/assets/fonts/**/*'])
        .pipe(gulp.dest('.tmp/fonts'))
        .pipe($.size());
});

/**
 * Задача копирования изображений проекта в .dist-tmp
 */
gulp.task('images-copy', function () {
    return gulp.src(['src/assets/images/**/*'])
        .pipe(gulp.dest('.dist-tmp/images'))
        .pipe($.size());
});

/**
 * Задача копирования шрифтов проекта в .dist-tmp
 */
gulp.task('fonts-copy', function () {
    return gulp.src(['src/assets/fonts/**/*'])
        .pipe(gulp.dest('.dist-tmp/fonts'))
        .pipe($.size());
});

/**
 * Задача реализующая добавление хэша к статическим файлам
 */
gulp.task('rev', function () {
    var revAll = new $.revAll({
        dontRenameFile: [/^\/index\.html$/],
        prefix: config.CDNURL.replace(/[/]+$/, '')
    });
    return gulp.src(['.dist-tmp/**/*.*', '.dist-tmp/index.html'])
        .pipe(revAll.revision())
        .pipe(gulp.dest('dist'))
        .pipe(revAll.manifestFile())
        .pipe(gulp.dest('dist'));
});

/**
 * Задача реализующая замену путей для CDN в индексном файле проекта (HTML)
 * Применяется уже к собранному проекту
 */
gulp.task('cdn-paths', function () {
    var domain = config.CDNURL.replace(/[/]+$/, '');
    return domain && gulp.src(['dist/index.html'])
            .pipe($.assetpaths({
                newDomain: domain,
                oldDomain: domain,
                docRoot: 'images',
                filetypes: ['jpg', 'jpeg', 'png', 'ico', 'gif', 'js', 'css', 'svg'],
                templates: true
            }))
            .pipe(gulp.dest('dist'));
});

/**
 * Задача генерации файла конфига проекта
 */
gulp.task('config', function () {
    return gulp.src(['./config/config.js'])
        .pipe($.replaceTask({
            patterns: [
                {
                    json: {
                        APIURL: config.APIURL,
                        CDNURL: config.CDNURL
                    }
                }
            ]
        }))
        .pipe(gulp.dest('.tmp/js'));
});

/**
 * Задача очистки временных директорий
 */
gulp.task('clean', function (cb) {
    return del(['.tmp', '.dist-tmp', 'dist'], cb);
});

/**
 * Задача очистки временных директорий после сборки
 */
gulp.task('post-clean', function (cb) {
    return del(['.tmp', '.dist-tmp'], cb);
});

/**
 * Задача сборки проекта
 *
 * Поочередно выполняются наборы задач: очистка директорий, генерация конфига,
 * сборка частей проекта, замена путей CDN, очистка временных директорий
 */
gulp.task('build', function (callback) {
    runSequence(
        'clean',
        'config',
        ['fonts-copy', 'images-copy'],
        'html',
        'rev',
        'cdn-paths',
        'post-clean',
        callback);
});