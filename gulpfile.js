const { src, dest, watch, series } = require('gulp');
const sass = require('sass');
const Fiber = require('fibers');
function scss() {
return src('src/scss/main.scss')
.pipe(
sass({ fiber: Fiber, outputStyle: 'compressed' }).on('error', sass.logError)
)
.pipe(dest('src/css'));
}
exports.scss = scss;
exports.dev = () => watch('src/scss/**/*.scss', scss);
exports.build = series(scss);
