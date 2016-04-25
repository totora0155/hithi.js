const gulp = require('gulp');
const plumber = require('gulp-plumber');
const cssx = require('gulp-cssx');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

gulp.task('babel', () => {
  gulp.src('lib/**/*.babel.js')
    .pipe(plumber())
    .pipe(cssx())
    .pipe(rename(path => {
      path.basename = path.basename.match(/^[^.]+/)[0];
    }))
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['babel'], () => {
  gulp.watch('lib/**/*.babel.js', ['babel'])
});
