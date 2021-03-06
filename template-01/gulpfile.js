var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');


gulp.task('sass', function() {
	return gulp.src('scss/**/*.scss')
	.pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('css'))
          });

gulp.task('watch', function() {
	gulp.watch('scss/**/*.scss', gulp.series('sass'))
});

