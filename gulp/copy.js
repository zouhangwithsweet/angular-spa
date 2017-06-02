/**
 * Created by zou hang on 2017/3/18.
 */

let gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

//删除构建目录
gulp.task('clean:build', () => {
    return gulp.src('./build')
        .pipe($.clean());
});
//删除开发目录
gulp.task('clean:dev', () => {
    return gulp.src('./dev')
        .pipe($.clean());
});

//复制任务
gulp.task('copy:dev', () => {
    return gulp.src(['./dev/js/*.js', './dev/fonts/*', './dev/img/*'], {base: 'dev'})
        .pipe(gulp.dest('./build'));
});