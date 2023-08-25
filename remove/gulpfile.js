// gulpfile.js
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// 將sass編譯成css
function buildStyles() {
  return src('sass/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

// 自動監聽，只要有儲存檔案就會自動將sass編譯成css
function watchTasks() {
  watch(['sass/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTasks);
