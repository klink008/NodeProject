var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var html2js = require('gulp-html2js');
var runSequence = require('run-sequence');
var karma = require('gulp-karma');
var less = require('gulp-less');

var paths = {
    dependencies: ['node_modules/angular/angular.js',
        'node_modules/restangular/src/restangular.js',
        'node_modules/underscore/underscore.js',
        'node_modules/angular-mocks/angular-mocks.js']

};

gulp.task('test', function(){
    return gulp.src('./foobar')
    .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
    }))
    .on('error', function(err){
      console.log(err);
      this.emit('end')
    })
});

gulp.task('dependencies-build', function(){
    return gulp.src(['node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/underscore/underscore.js',
        'node_modules/angular-cookies/angular-cookies.js',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/restangular/src/restangular.js'])
        .pipe(concat('dependencies.js'))
        .pipe(gulp.dest('public/dependencies'))
});

gulp.task('dependencies-clean', function(){
    return gulp.src('public/dependencies')
        .pipe(clean());
});

gulp.task('stylesheets-clean', function(){
   return gulp.src('public/stylesheets/css/styles.css')
       .pipe(clean());
});

gulp.task('styles', function(){
    return gulp.src('public/stylesheets/less/style.less')
        .pipe(less())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('public/stylesheets/css'));
});

//
//gulp.task('source-build', function(){
//    return gulp.src(['build/templates.js',
//                     'main/angular/js/module.js'])
//        .pipe(concat('source.js'))
//        .pipe(gulp.dest('build'))
//});
//
//gulp.task('template', function(){
//    return gulp.src(paths.html[0])
//        .pipe(html2js({
//            outputModuleName: 'templates-main',
//            useStrict: true
//        }))
//        .pipe(concat('templates.js'))
//        .pipe(gulp.dest('build'))
//});
//
//gulp.task('template-annotate', function(){
//    return gulp.src('build/dependencies.js')
//        .pipe(ngAnnotate())
//        .pipe(gulp.dest('build'))
//});
//
//gulp.task('source-annotate', function(){
//    return gulp.src('build/source.js')
//        .pipe(ngAnnotate())
//        .pipe(gulp.dest('build'))
//});
//
//gulp.task('source-clean', function(){
//    return gulp.src(paths.clean[0])
//        .pipe(clean());
//});
//
//
//gulp.task('dependencies-copy', function(){
//    return gulp.src('build/dependencies.js')
//        .pipe(gulp.dest('public/dependencies'));
//});
//
//gulp.task('source-copy', function(){
//    return gulp.src('build/source.js')
//        .pipe(gulp.dest('public/js'));
//});

gulp.task('default', function(callback){
    runSequence(['dependencies-clean'],
        ['dependencies-build'],
        ['stylesheets-clean'],
        ['styles'],
        callback)
});