/**
 * Created by zou hang on 2017/4/15.
 */

let gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('revCSS', () => {
    return gulp.src('./dev/css/*.css')
        .pipe($.rev())
        .pipe(gulp.dest('./build/css'))
        .pipe($.rev.manifest())
        .pipe(gulp.dest('./rev/css'));
});

gulp.task('revJS', () => {
    return gulp.src(['./dev/js/app.js', './dev/js/base.js', './dev/js/vendors.js'])
        .pipe($.rev())
        .pipe(gulp.dest('./build/js'))
        .pipe($.rev.manifest())
        .pipe(gulp.dest('./rev/js'));
});

gulp.task('revCollectorHtml', () => {
    return gulp.src(['./rev/**/*.json', './dev/index.html'])
        .pipe($.revCollector())
        .pipe(gulp.dest('./build'));
});