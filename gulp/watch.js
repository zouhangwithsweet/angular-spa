/**
 * Created by zou hang on 2017/3/11.
 */
var gulp = require('gulp');
//服务器
gulp.task('watch', function () {
    gulp.watch('./src/*.html', ['usemin:dev']);
});