// Constants
var appPath = "./app";
var allHTMLFiles = './app/**/*.html';
var angularModuleFile = './app/app.js';
var appBundledFileName = 'app-bundled.js';


// PLUGINS
var gulp = require('gulp');
var connect = require('gulp-connect');	// To create gulp server task
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

/*
**********************
DEFAULT/BUILD RELATED TASK
**********************
*/

// Gulp default task for http localhost serve from ./app
gulp.task('default', ['browserify-modules', 'connect-localhost']);

// Gulp default task for http self-host serve from ./app
gulp.task('http', ['browserify-modules', 'connect-http']);


/* HTTP localhost*/

// Create server : http://localhost:8888/ and serve from ./app
gulp.task('connect-localhost', function () {
	return connect.server({
		root: appPath,
		port: 8080
	});
});
/* HTTP self-host*/

// Create server : http://self-host:80/ and serve from ./app
gulp.task('connect-http', function () {
	return connect.server({
		root: appPath,
		host: '0.0.0.0',
		port: 80
	});
});

// Task to browserify the angular modules (Combine and keep ready to minify)
gulp.task('browserify-modules', function () {
    return gulp.src(angularModuleFile)
        .pipe(browserify({
            insertGlobals : true,
            debug : true
        }))
        .pipe(concat(appBundledFileName))
        .pipe(gulp.dest(appPath))
});

