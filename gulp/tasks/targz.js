'use strict';

var gulp = require('gulp');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var dateFormat = require('dateformat');
var fs = require('fs');
var plumber = require('gulp-plumber');

var config = require('../config');

gulp.task('targz', function () {
  var now = new Date();
  var packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  return gulp.src(config.destPaths.allFiles)
    .pipe(plumber())
    .pipe(tar('release-v' + packageJson.version + '-' + dateFormat(now, "yyyy.mm.dd-HH.MM.ss") + '.tar'))
    .pipe(gzip())
    .pipe(gulp.dest(config.destPaths.targetDir));
});
