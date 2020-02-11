const gulp = require('gulp');
const sass = require('gulp-sass');

// compile scss into css
function style() {
  // 1. source
  return gulp.src('./scss/main.scss')
    // 2. compile
    .pipe(sass().on('error', sass.logError))
    // 3. dest
    .pipe(gulp.dest('./app/css'))
}

function watch() {
  gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
