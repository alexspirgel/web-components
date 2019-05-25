const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpack_config = require('./webpack.config.js');

gulp.task('style', () => {
	return gulp.src('./src/style/*.scss')
		.pipe(gulpSass().on('error', gulpSass.logError))
		.pipe(gulp.dest('./dist/style'));
});

gulp.task('script', () => {
	return gulp.src('./src/script/script.js')
		.pipe(webpackStream(webpack_config), webpack)
		.on('error', function() {
			this.emit('end');
		})
		.pipe(gulp.dest('./dist/script'));
});

gulp.task('watch', () => {
	gulp.watch('./src/style/*', gulp.parallel('style'));
	gulp.watch('./src/script/*', gulp.parallel('script'));
	gulp.watch('./src/template/*', gulp.parallel('script'));
});

gulp.task(
	'default',
	gulp.series(
		gulp.parallel(
			'style',
			'script'
		),
	'watch')
);