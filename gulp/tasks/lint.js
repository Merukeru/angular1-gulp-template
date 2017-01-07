'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sassLint = require('gulp-sass-lint');
var htmlhint = require('gulp-htmlhint');
var plumber = require('gulp-plumber');

var config = require('../config');

gulp.task('eslint', function () {
  return gulp.src([config.srcPaths.js, config.vendor.excludeNodeModules])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('jshint', ['eslint'], function () {
  return gulp.src([config.srcPaths.js, config.vendor.excludeNodeModules])
    .pipe(plumber())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sasslint', function () {
  return gulp.src(config.srcPaths.scss)
    .pipe(plumber())
    .pipe(sassLint({
      options: {
        formatter: 'stylish',
        'merge-default-rules': false
      },
      configFile: 'sass-lint.yml'
    }))
    .pipe(sassLint.format())
});

gulp.task('htmlhint', function () {
  return gulp.src([config.srcPaths.html, config.srcPaths.excludeIndex])
    .pipe(plumber())
    .pipe(htmlhint({'doctype-first': false}))
    .pipe(htmlhint.reporter());
});

gulp.task('htmlhint:index', function () {
  return gulp.src(config.srcPaths.index)
    .pipe(plumber())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter());
});

gulp.task('lint', ['eslint', 'jshint', 'sasslint', 'htmlhint', 'htmlhint:index']);
