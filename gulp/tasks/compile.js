'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var rev = require('gulp-rev');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');

var bs = require("../utils/browser-sync");
var config = require('../config');

var bsServer = bs.getServer();

gulp.task('compileScripts', function () {
  var isProductionMode = (process.env.NODE_ENV === 'production');

  return gulp.src(config.srcPaths.js)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(concat(config.destPaths.appJsOutput))
    .pipe(ngAnnotate())
    .pipe(gulpif(config.build.uglify, uglify()))
    .pipe(sourcemaps.write('.'))
    .pipe(gulpif(isProductionMode, rev()))
    .pipe(gulp.dest(config.destPaths.scriptsDir));
});

gulp.task('compileVendorScripts', function () {
  var isProductionMode = (process.env.NODE_ENV === 'production');

  return gulp.src(config.vendor.scripts)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(plumber())
    .pipe(concat(config.destPaths.vendorScriptOutput))
    .pipe(gulpif(config.build.uglify, uglify()))
    .pipe(sourcemaps.write('.'))
    .pipe(gulpif(isProductionMode, rev()))
    .pipe(gulp.dest(config.destPaths.scriptsDir));
});

gulp.task('compileStyles', function () {
  var isProductionMode = (process.env.NODE_ENV === 'production');

  return gulp.src(config.srcPaths.scss)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(concat(config.destPaths.appStylesOutput))
    .pipe(sass.sync({
      style: 'compressed',
      loadPath: config.vendor.styles.concat([], []) [
        './app/styles',
          './app/styles/components',
          './node_modules/bootstrap-sass/assets/stylesheets',
          './node_modules/fontawesome/scss'
        ]
    }))
    .pipe(autoprefixer())
    .pipe(gulpif(config.build.uglify, cleanCSS()))
    .pipe(sourcemaps.write('.'))
    .pipe(gulpif(isProductionMode, rev()))
    .pipe(gulp.dest(config.destPaths.stylesDir))
    .pipe(bsServer.stream({match: "**/*.css"}));
});

gulp.task('compile', ['compileScripts', 'compileVendorScripts', 'compileStyles']);
