let gulp = require('gulp'),
    runSequence = require('run-sequence'),
    wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

//默认任务
gulp.task('dev', function (done) {
    runSequence(
        ['server:dev'],
        ['clean:dev'],
        ['usemin:dev'],
        ['watch'],
        ['webpack:dev'],
        done
    );
});

//默认任务
gulp.task('build', function (done) {
    runSequence(
        ['clean:dev', 'clean:build'],
        ['usemin:dev'],
        ['webpack:build'],
        ['copy:dev'],
        ['revCSS', 'revJS'],
        ['revCollectorHtml'],
        done
    );
})