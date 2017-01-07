'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var htmlmin = require('gulp-htmlmin');
var gulpif = require('gulp-if');

var config = require('../config');

gulp.task('copyDocuments', function () {
  return gulp.src(config.srcPaths.documents)
    .pipe(gulp.dest(config.destPaths.documentsDir));
});

gulp.task('copyFonts', function () {
  return gulp.src(config.vendor.fonts)
    .pipe(gulp.dest(config.destPaths.fontsDir));
});

gulp.task('copyImages', function () {
  return gulp.src(config.srcPaths.images)
    .pipe(plumber())
    .pipe(changed(config.destPaths.imagesDir))
    .pipe(imagemin())
    .pipe(gulp.dest(config.destPaths.imagesDir));
});

gulp.task('copyViews', function () {
  return gulp.src(config.srcPaths.views)
    .pipe(plumber())
    .pipe(changed(config.destPaths.viewsDir))
    .pipe(gulpif(config.build.uglify, htmlmin({collapseWhitespace: true, removeComments: true})))
    .pipe(gulp.dest(config.destPaths.viewsDir));
});

gulp.task('copyAppRootFiles', function () {
  return gulp.src([config.srcPaths.rootFiles, config.srcPaths.excludeIndex])
    .pipe(plumber())
    .pipe(changed(config.destPaths.dir))
    .pipe(gulp.dest(config.destPaths.dir));
});

gulp.task('copy', ['copyAppRootFiles', 'copyDocuments', 'copyFonts', 'copyImages', 'copyViews']);
