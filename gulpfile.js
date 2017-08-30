var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        sass = require('gulp-ruby-sass'),
        concat = require('gulp-concat'),
        webserver = require('gulp-webserver');


gulp.task('scripts', function () {
    gulp.src("assets/js/*.js")
            .pipe(uglify())
            .pipe(gulp.dest('html/build/js'));
});

gulp.task('styles', function () {
    sass("assets/scss/*.scss", {sourcemap: true})
            .pipe(gulp.dest('html/build/css/temp'));

    /*gulp.src([
     'html/build/css/temp/shared.css',
     'html/build/css/temp/home.css',
     'html/build/css/temp/login.css',
     'html/build/css/temp/common.css',
     'html/build/css/temp/companies.css',
     'html/build/css/temp/company.css',
     'html/build/css/temp/resources.css',
     'html/build/css/temp/reviews.css'
     ]).pipe(concat("style.css"))
     .pipe(gulp.dest("html/build/css"));*/
});

gulp.task('watch', function () {
    gulp.watch("assets/scss/*.scss", ["styles"]);
    gulp.watch("assets/js/*.js", ["scripts"]);
    gulp.watch("*.html", function () {
        location.reload();
    });
});

gulp.task('webserver', function () {
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
});

gulp.task('default', ['styles', 'scripts', 'webserver', 'watch']);
