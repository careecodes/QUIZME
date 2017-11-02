const babel = require('gulp-babel');
const debug = require('gulp-debug');
const ext_replace = require('gulp-ext-replace');
const gulp = require('gulp');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');


gulp.task('styles', () => {
  return gulp.src('./styles/*.scss', { base: 'styles/'})
    .pipe(sourcemaps.init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(sourcemaps.write('./'))
    .pipe(debug({ title: 'CSS |' }))
    .pipe(gulp.dest('dist'))
    .pipe(notify("SCSS task finished"));
});

gulp.task('scripts', () => {
  return gulp.src('./scripts/**/*.js', { base: 'scripts/'})
    .pipe(sourcemaps.init())
    .pipe(debug({ title: 'JS |' }))
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(ext_replace('.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
    .pipe(notify("JS task finished"));
});

gulp.task('watch', ['styles', 'scripts'], () => {
  gulp.watch('styles/*.scss', ['styles']);
  gulp.watch(['scripts/*.js'], ['scripts']);
});

gulp.task('default', ['watch']);