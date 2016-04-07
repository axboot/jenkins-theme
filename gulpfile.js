'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");


function errorAlert(error) {
    notify.onError({title: "Gulp Error", message: "Check your terminal", sound: "Purr"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
}

/**
 * SASS
 */
gulp.task('scss', function () {
    gulp.src('scss/jenkins-theme.scss')
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("."));
});


/**
 * watch
 */
gulp.task('default', ['scss'], function () {
    // SASS
    gulp.watch('scss/**/*.scss', ['scss']);
});