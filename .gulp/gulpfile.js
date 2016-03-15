var gulp = require('gulp'),
  sass = require('gulp-sass'),
  neat = require('node-neat').includePaths;

var paths = {
  scss: '../app/**/*.scss'
};

gulp.task('styles', function () {
  gulp.src(paths.scss)
    .pipe(sass({
      includePaths: require('node-neat').includePaths,
      style: 'compressed',
      quite: true
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../public/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scss, ['styles']);
});

gulp.task('start',['styles','watch'],function(){
});