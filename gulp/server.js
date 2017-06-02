/**
 * Created by zou hang on 2017/3/11.
 */
var gulp = require('gulp'),
    proxy = require('http-proxy-middleware'),
    gzip = require('connect-gzip'),
    $ = require('gulp-load-plugins')();

gulp.task('server:dev', function () {
    $.connect.server({
        root: './dev/',
        port: 9003,
        livereload: false,
        middleware: function () {
            return [
                proxy('/v2', {
                    target: 'http://10.94.112.168',
                    changeOrigin: false
                }),
                proxy('/app', {
                    target: 'http://10.94.112.168',
                    changeOrigin: false
                })
            ]
        }
    });
});

gulp.task('server', function () {
    $.connect.server({
        root: './build/',
        port: 9003,
        livereload: false,
        middleware: function () {
            return [
                proxy('/v2', {
                    target: 'http://10.94.112.168',
                    changeOrigin: false
                }),
                proxy('/app', {
                    target: 'http://10.94.112.168',
                    changeOrigin: false
                }),
                gzip.gzip()
            ]
        }
    });
});