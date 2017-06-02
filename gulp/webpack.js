/**
 * Created by zou hang on 2017/3/11.
 */

let webpack = require('webpack'),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    webpackStream = require('webpack-stream');

//js构建任务
gulp.task('webpack:dev', () => {
    return gulp.src('./src/app/app.js')
        .pipe($.plumber())
        .pipe(webpackStream(require('./webpack.config.dev.js'), webpack))
        .pipe(gulp.dest('./dev'));
});

//js构建任务
gulp.task('webpack:build', () => {
    return gulp.src('./src/app/app.js')
        .pipe($.plumber())
        .pipe(webpackStream(require('./webpack.config.build.js'), webpack))
        .pipe(gulp.dest('./dev'));
});