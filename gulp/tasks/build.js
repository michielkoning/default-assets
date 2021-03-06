const gulp = require('gulp');
const runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence(
    'delete',
    [
      'sass',
      'svg',
      'scripts',
      'images',
    ],
    callback,
  );
});
