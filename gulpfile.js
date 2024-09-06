const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require ('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function compilaSass() {
    return gulp.src ('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImage() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/image'));
    
}

function comprimeJavaScript() {
    return gulp.src('./source/script/*js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('build/script'))
}
exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImage));
}
