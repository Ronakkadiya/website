var gulp = require('gulp');
var fs = require('fs');
var tasks = fs.readdirSync('./_gulp/tasks/');

tasks.forEach(function(task) {
  require('./tasks/' + task);
});

gulp.task('watch',
  gulp.parallel('css', 'js', 'jekyll:watch', 'serve'));

gulp.task('build',
  gulp.parallel('css', 'js', 'docs:install', 'jekyll:build'));
