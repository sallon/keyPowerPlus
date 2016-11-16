/**
 * Created by yubo on 16/6/1.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('app/static/_key/*.scss')
    //.pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('app/static/css/'))
        .pipe(gulp.dest('../public/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
    return gulp.src('app/static/_key/*/*.scss')
    //.pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('app/static/css/'))
        .pipe(gulp.dest('../public/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app/'
        },
    })
})
gulp.task('watch', function () {
    gulp.watch('app/static/_key/*.scss', ['browserSync', 'sass']);
    gulp.watch('app/static/_key/model/*.scss', ['browserSync', 'sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/*/*.html', browserSync.reload);
    gulp.watch('app/static/js/**/*.js', browserSync.reload);
})
