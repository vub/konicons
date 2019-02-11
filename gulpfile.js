var gulp = require('gulp');
var less = require('gulp-less');
var css = require('gulp-css');
var modifyCssUrls = require('gulp-modify-css-urls');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

var paths = {
  styles: {
    src: 'assets/css/**/*.css',
    dest: 'min/styles/'
  },
  scripts: {
    src: [
        'assets/js/jquery-1.11.2.min.js',
        'assets/js/bootstrap.min.js',
        'assets/js/jquery.sticky.js',
        'assets/js/slider/jquery.themepunch.tools.min.js',
        'assets/js/slider/jquery.themepunch.revolution.min.js',
        'assets/js/slider/custom-revolution.js',
        'assets/js/jquery.cubeportfolio.min.js',
        'assets/js/portfolio-custom.js',
        'assets/js/slick.min.js',
        'assets/js/modernizr.custom.js',
        'assets/js/jquery.magnific-popup.min.js',
        'assets/js/jquery.touchSwipe.min.js',
        'assets/js/jquery.liquid-slider.js',
        'assets/js/ionrangeslider.js',
        'assets/js/classie.js',
        'assets/js/wow.min.js',
        'assets/js/main.js',
        'assets/js/theme_panel.js',
    ],
    dest: 'min/scripts/'
  }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'min' ]);
}

/*
 * Define our tasks using plain functions
 */
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(modifyCssUrls({
        modify: function (url, filePath) {
            return '/' + url;
        },
        prepend: 'http://konicons.com.vn/',
        append: ''
    }))
    .pipe(css())
    .pipe(cleanCSS())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles, scripts));

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;