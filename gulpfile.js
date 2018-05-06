var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        sass = require('gulp-ruby-sass'),
        concat = require('gulp-concat'),
        webserver = require('gulp-webserver');

gulp.task('scripts');
gulp.task('styles');
gulp.task('server');

function scripts() {
    gulp.src("assets/js/*.js")
            .pipe(uglify())
            .pipe(gulp.dest('html/build/js'));
}

function styles() {
    sass("assets/scss/*.scss", {sourcemap: true})
            .pipe(gulp.dest('html/build/css'));

}
function watch() {
    gulp.watch("assets/scss/*.scss", gulp.series("styles"));
    gulp.watch("assets/js/*.js", gulp.series("scripts"));
    gulp.watch("*.html", function () {
        location.reload();
    });
}
function server() {
    gulp.src('html')
            .pipe(webserver({
                fallback: 'index.html',
                livereload: true,
                directoryListing: {
                    enable: true,
                    path: './html/'
                },
                open: true
            }));
}

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.server = server;


gulp.task('default', gulp.parallel(styles, scripts, server, watch));