/*
============================================================
  Gulp Task Runner
============================================================
*/

'use strict';

/*
============================================================
  Gulp Config
============================================================
*/

// dependencies
var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    csscomb      = require('gulp-csscomb'),
    csslint      = require('gulp-csslint'),
    handlebars   = require('gulp-handlebars'),
    imagemin     = require('gulp-imagemin'),
    jscs         = require('gulp-jscs'),
    jshint       = require('gulp-jshint'),
    manifest     = require('gulp-manifest'),
    notify       = require('gulp-notify'),
    plumber      = require('gulp-plumber'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglify'),
    util         = require('gulp-util');

// paths
var styles  = 'assets/stylesheets/',
    scripts = 'assets/javascripts/',
    images  = 'assets/images/';

/*
============================================================
  Gulp Flows
============================================================
*/

// export css
gulp.task('exportCSS', function() {

  // custom csslint logger
  var cssLintLog = function(file) {

    util.log(util.colors.magenta(file.csslint.errorCount) + ' errors in ' + util.colors.magenta(file.path));

    file.csslint.results.forEach(function(result) {

      var errLocation = (!result.error.rollup) ? result.error.line + ':' + result.error.col : 'Warning',
          errMessage  = (result.error.message) ? result.error.message : 'N/A',
          errLog      = (result.error.type === "error") ? '[' + util.colors.red(errLocation) + '] ' + errMessage : '[' + util.colors.yellow(errLocation) + '] ' + errMessage;

      util.log(errLog);

    });

  };

  // prepare css
  return gulp.src(styles + 'application.scss')
    .pipe(sass({
        outputStyle: 'compressed' // nested, expanded, compact, compressed
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
    .pipe(csslint({
        'box-model'          : false,
        'box-sizing'         : false,
        'font-sizes'         : false,
        'important'          : false,
        'regex-selectors'    : false,
        'universal-selector' : false,
        'unique-headings'    : false
      }))
    .pipe(csslint.reporter(cssLintLog))
    .pipe(rename({
        extname: '.min.css'
      }))
    .pipe(gulp.dest(styles));

});

// export js
gulp.task('exportJS', function() {

  // prepare js
  return gulp.src(scripts + '*.js.erb')
    .pipe(concat('application.js'))
    .pipe(jshint({}))
    .pipe(uglify())
    .pipe(rename({
        extname: '.min.js'
      }))
    .pipe(gulp.dest(scripts));

});

// export img
gulp.task('exportIMG', function() {

  return;

});

// run unit tests
gulp.task('test', function() {

  return;

});

/*
============================================================
  Gulp Watchers
============================================================
*/

// watch stylesheets directory
gulp.task('watch:styles', function() {
  return gulp.watch(styles + '/**/*.scss', ['exportCSS']);
});

// watch javascripts directory
gulp.task('watch:scripts', function() {
  return gulp.watch(scripts + '*.js.erb', ['exportJS']);
});

// watch images directory
gulp.task('watch:images', function() {
  return gulp.watch(images + '/**/*.{svg, png, jpg}', ['exportIMG']);
});

// watch all asset directories
gulp.task('watch:all', ['watch:styles', 'watch:scripts', 'watch:images']);

/*
============================================================
  Gulp Build Flows
============================================================
*/

// development flow
gulp.task('default', ['exportCSS', 'exportJS', 'exportIMG', 'test']);

// staging flow
gulp.task('stage', ['exportCSS', 'exportJS', 'exportIMG', 'test']);

// production flow
gulp.task('build', ['exportCSS', 'exportJS', 'exportIMG', 'test']);
