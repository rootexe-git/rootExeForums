const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass");

gulp.task('default', () => watchSass([
    "./src/sass/**/*.{scss,css}",
  ])
  .pipe(sass())
  .pipe(gulp.dest('./src/css'))
);