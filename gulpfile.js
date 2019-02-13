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
var imagemin = require('gulp-imagemin');
var gulpCopy = require('gulp-copy');

var paths = {
  styles: {
    src: 'src/css/**/*.css',
    dest: 'assets/styles/'
  },
  scripts: {
    src: [
        'src/js/jquery-1.11.2.min.js',
        'src/js/bootstrap.min.js',
        'src/js/jquery.sticky.js',
        'src/js/slider/jquery.themepunch.tools.min.js',
        'src/js/slider/jquery.themepunch.revolution.min.js',
        'src/js/slider/custom-revolution.js',
        'src/js/loadproject.js',
        'src/js/jquery.cubeportfolio.min.js',
        'src/js/portfolio-custom.js',
        'src/js/slick.min.js',
        'src/js/modernizr.custom.js',
        'src/js/jquery.magnific-popup.min.js',
        'src/js/jquery.touchSwipe.min.js',
        'src/js/jquery.liquid-slider.js',
        'src/js/ionrangeslider.js',
        'src/js/classie.js',
        'src/js/wow.min.js',
        'src/js/main.js',
        'src/js/theme_panel.js',
    ],
    dest: 'assets/scripts/'
  },
  images: {
    src: [
      // 'src/images/**/*.png',
      // 'src/images/**/*.jpg',
      // 'src/images/**/*.gif',
      // 'src/images/**/*.jpeg',
      'src/images/**/*',
    ],
    dest: 'assets/images'
  },
  fonts: {
    src: 'src/fonts/*',
    dest: 'assets/'
  }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 
    'assets/fonts',
    'assets/scripts',
    'assets/styles'
   ]);
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

function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin(
      [
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest(paths.images.dest));
}

function copy() {
  return gulp
    .src(paths.fonts.src)
    .pipe(gulpCopy(paths.fonts.dest, { prefix: 1 }));
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles, scripts, images, copy));

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