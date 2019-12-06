const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync').create();


const jsFiles = [
    './src/start-page.js',
    './src/page-list.js',
    './src/list.js',
    './src/controls.js',
    './src/router.js',
    './src/page-phone.js'
]

function scripts() {
    return gulp.src(jsFiles)

    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./bild/js'))
    .pipe(browserSync.stream());
}

function clean() {
    return del(['bild/js/*'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/**/*.js', scripts)
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, scripts,));

gulp.task('dev', gulp.series('build', 'watch'));