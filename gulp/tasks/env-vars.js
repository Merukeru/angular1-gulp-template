'use strict';

var gulp = require('gulp');

gulp.task('set-env-timezone', function() {
    return process.env.TZ = 'Europe/Berlin';
});

gulp.task('set-env-dev', ['set-env-timezone'], function() {
  return process.env.NODE_ENV = 'development';
});

gulp.task('set-env-prod', ['set-env-timezone'], function() {
  return process.env.NODE_ENV = 'production';
});

