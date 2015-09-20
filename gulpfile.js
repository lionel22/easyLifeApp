// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var sh = require('shelljs');
var replace = require('replace');


var replaceFiles = ['./app_cl/user/app.user.js'];
var paths = {
  sass: ['./scss/ionic.app.scss'],
  scripts_user: ['./app_cl/user/**/*.js'],
  scripts_entreprise: ['./app_cl/entreprise/**/*.js'],
  scripts_taxi: ['./app_cl/taxi/**/*.js']

};


gulp.task('add-proxy', function() {
  return replace({
    regex: "http://localhost:5000/api",
    replacement: "http://localhost:8100/api",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})

gulp.task('remove-proxy', function() {
  return replace({
    regex: "http://localhost:8100/api",
    replacement: "http://localhost:5000/api",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})

// Default Task
gulp.task('default', ['sass', 'scripts_user','scripts_entreprise','scripts_taxi','remove-proxy', 'add-proxy','watch']);

// Compile Our Sass
gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

// Concatenate & Minify JS
gulp.task('scripts_user', function() {
  return gulp.src(paths.scripts_user)
    .pipe(concat('user.js'))
    .pipe(gulp.dest('www/js'))
    .pipe(rename('user.min.js'))
    .pipe(ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))
    .pipe(uglify())
    .pipe(gulp.dest('www/js'));
});

gulp.task('scripts_entreprise', function() {
  return gulp.src(paths.scripts_entreprise)
    .pipe(concat('entreprise.js'))
    .pipe(gulp.dest('www/js'))
    .pipe(rename('entreprise.min.js'))
    .pipe(ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))
    .pipe(uglify())
    .pipe(gulp.dest('www/js'));
});

gulp.task('scripts_taxi', function() {
  return gulp.src(paths.scripts_taxi)
    .pipe(concat('user.js'))
    .pipe(gulp.dest('www/js'))
    .pipe(rename('user.min.js'))
    .pipe(ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))
    .pipe(uglify())
    .pipe(gulp.dest('www/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./app_cl/user/**/*.js', ['scripts_user']);
  gulp.watch('./app_cl/entreprise/**/*.js', ['scripts_entreprise']);
  gulp.watch('./app_cl/taxi/**/*.js', ['scripts_taxi']);

  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});


gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);

  }
  done();
});
