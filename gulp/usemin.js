/**
 * Created by zou hang on 2017/3/11.
 */
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();
//合并任务
gulp.task('usemin:dev', () => {
    return gulp.src('./src/index.html')
        .pipe($.usemin())
        .pipe(gulp.dest('./dev/'));
});