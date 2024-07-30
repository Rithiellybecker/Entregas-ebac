const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function ComprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

gulp.task('comprimeImagens', comprimeImagens);

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputSyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback){
    console.log("teste");
    callback();
}

exports.default = funcaoPadrao;
exports.sass =compilaSass;
exports.watch = function(){
    gulp.watch('./source/styles/*scss',{ignoreInitial: false}, gulp.series(compilaSass));
}

exports.images = comprimeImagens;
exports.javascript = ComprimeJavaScript;