const { src, dest, series, parallel, watch } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');

const globs = {
    html:'project/*.html',
    css:'project/*.css',
    js:'project/*.js',
    img:'project/image/*'
}

function htmlTask() {
    return src(globs.html).pipe(htmlmin({collapseWhitespace: true})).pipe(dest('dist'))
}


function cssTask() {
    return src(globs.css).pipe(cleanCSS()).pipe(dest('dist/assets'))
}

function jsTask() {
    return src(globs.js).pipe(terser()).pipe(dest('dist/assets'))
}

function imgTask() {
    return src(globs.img).pipe(imagemin()).pipe(dest('dist/assets'))
}

function watchTask() {
    watch(globs.html,htmlTask)
    watch(globs.css,cssTask)
    watch(globs.js,jsTask)
    watch(globs.img,imgTask)
}
exports.html = htmlTask;
exports.css = cssTask;
exports.js = jsTask;
exports.img = imgTask;

exports.default = series(parallel(htmlTask, cssTask, jsTask, imgTask), watchTask)