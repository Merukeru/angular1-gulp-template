'use strict';

var gulp = require('gulp');
var bsSpa = require('browser-sync-spa');
var runSequence = require('run-sequence');

var bs = require("../utils/browser-sync");
var config = require('../config');

var bsServer = bs.getServer();

bsServer.use(bsSpa({
  selector: '[ng-app]'
}));

gulp.task('browser-sync:reload', bsServer.reload);

gulp.task('updateAll', function () {
  return runSequence('compile', 'inject');
});

gulp.task('updateViews', function () {
  return runSequence('copyViews', 'inject');
});

gulp.task('updateAppScripts', function () {
  return runSequence('compileScripts', 'inject');
});

gulp.task('updateAppStyles', function () {
  return runSequence('compileStyles', 'inject');
});

gulp.task('watch', function () {
  gulp.watch(config.srcPaths.scss, ['updateAppStyles']);
  gulp.watch(config.srcPaths.js, ['updateAppScripts']);
  gulp.watch(config.srcPaths.html, ['updateViews']);
});

gulp.task('browser-sync', ['watch'], function () {
  bsServer.init({
    https: true,
    server: config.destPaths.dir,
    reloadThrottle: 100,
    reloadDelay: 1000
  });

  gulp.watch(config.destPaths.allHtml).on('change', bsServer.reload);
  gulp.watch(config.destPaths.allJs).on('change', bsServer.reload);
});

gulp.task('browser-sync:prod', function () {
  return bsServer.init({
    https: true,
    server: config.destPaths.dir,
    codeSync: false,
    reloadThrottle: 100,
    reloadDelay: 1000
  });
});
