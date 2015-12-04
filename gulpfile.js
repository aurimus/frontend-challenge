'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var $ = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var livereload = require('gulp-livereload')

gulp.task('styles', function () {
  return gulp.src('app/styles/application.css')
    .pipe($.size());
});

// gulp.task('default', function () {

// });

gulp.task('html', ['styles', 'scripts'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src('app/*.html')
    .pipe($.useref.assets({searchPath: '{app}'}))
    .pipe(jsFilter)
    .pipe($.uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size());
});

gulp.task('fonts', function () {
  return gulp.src(mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size());
});

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('babel', function () {
  return gulp.src('app/scripts/main.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('app/dist'));
});

gulp.task('default', ['clean'], function () {
  gulp.start('watch');
});

gulp.task('connect', function () {
  var connect = require('connect');
  var app = connect()
    .use(require('connect-livereload')({ port: 35729 }))
    .use(connect.static('app'))
    .use(connect.static('.tmp'))
    .use(connect.directory('app'));

  require('http').createServer(app)
    .listen(8080)
    .on('listening', function () {
      console.log('Started connect web server on http://0.0.0.0:8080');
    });
});

gulp.task('serve', ['connect', 'styles'], function () {
  require('opn')('http://0.0.0.0:8080');
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.css')
    .pipe(wiredep({
      directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(gulp.dest('app'));
});

// watch for changes
gulp.task('watch', ['babel', 'connect', 'serve'], function () {
  livereload.listen();

  gulp.watch([
    'app/*.html',
    'app/styles/**/*.css',
    'app/scripts/**/*.js',
    'app/images/**/*'
  ]).on('change', function (file) {
    livereload.changed(file.path);
  });

  gulp.watch('app/styles/**/*.css', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['babel']);
  gulp.watch('app/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
