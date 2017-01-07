'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var htmlmin = require('gulp-htmlmin');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');

var config = require('../config');

gulp.task('inject', function () {
  var compiledScripts = [config.destPaths.vendorScripts, config.destPaths.templatesScripts, config.destPaths.appScripts];
  var scripts = gulp.src(compiledScripts);
  var compiledStyles = gulp.src(config.destPaths.stylesheets);

  return gulp.src(config.srcPaths.index)
    .pipe(plumber())
    .pipe(gulp.dest(config.destPaths.dir))
    .pipe(inject(scripts, {relative: true}))
    .pipe(inject(compiledStyles, {relative: true}))
    .pipe(gulpif(config.build.uglify, htmlmin({collapseWhitespace: true, removeComments: true})))
    .pipe(gulp.dest(config.destPaths.dir))
    .pipe(browserSync.stream());
});
