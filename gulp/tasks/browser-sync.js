var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../config').browsersync.development;

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browser-sync', ['build'], function() {
  browsersync(config);
});