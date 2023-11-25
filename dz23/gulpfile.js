const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Створення таску для компіляції SASS в CSS
gulp.task('sass', function () {
  return gulp.src('MARK VOLPOV.DZ1/dz23/src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('MARK VOLPOV.DZ1/dz23/dist/css'));
});

// Створення таску для конкатенації та мінімізації JS
gulp.task('js', function () {
  return gulp.src('MARK VOLPOV.DZ1/dz23/src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('MARK VOLPOV.DZ1/dz23/dist/js'));
});

// Створення таску для спостереження за змінами у SASS та JS файлах
gulp.task('watch', function () {
  gulp.watch('MARK VOLPOV.DZ1/dz23/src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('MARK VOLPOV.DZ1/dz23/src/js/**/*.js', gulp.series('js'));
});

// Запуск всіх тасків за замовчуванням
gulp.task('default', gulp.parallel('sass', 'js', 'watch'));