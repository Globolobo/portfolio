var gulp = require('gulp'),
	sass = require('gulp-sass'),
	neat = require('node-neat').includePaths;

var paths = {
	scss: './app/**/*.scss',
	css: './public/css'
};
var sassTaskName = 'sass';

gulp.task(sassTaskName, function () {
	gulp.src(paths.scss)
		.pipe(sass({
			includePaths: require('node-neat').includePaths,
			style: 'compressed',
			quiet: true
		}))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.css));
});

gulp.task('watch', function() {
	gulp.watch(paths.scss, [sassTaskName]);
});

gulp.task('styles',[sassTaskName,'watch'],function(){
});
