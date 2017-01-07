'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

gulp.task('build', function (cb) {
  gutil.log(gutil.colors.bgCyan.black('Build mode = ' + process.env.NODE_ENV));
  return runSequence(
    'clean',
    'lint',
    'copy',
    'compile',
    'inject',
    cb);
});

gulp.task('build:dev', function () {
  return runSequence('set-env-dev', 'build', 'test');
});

gulp.task('serve:dev', function () {
  return runSequence('set-env-dev', 'build', 'browser-sync');
});

gulp.task('serve:prod', function () {
  return runSequence('set-env-prod', 'build', 'browser-sync:prod');
});

gulp.task('serve', ['serve:dev']);

gulp.task('test', ['test:phantomjs']);

gulp.task('default', function () {
  return runSequence('set-env-prod', 'build', 'test', 'targz');
});
