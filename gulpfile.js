var gulp = require("gulp");
var sass = require("gulp-sass");

//compile
gulp.task("sass", async function() {
  gulp
    .src("app/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app/css"));
});
