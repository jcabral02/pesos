const gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    autoprefixer = require ('gulp-autoprefixer');

   gulp.task ('sass', ()=>
        gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            version: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./css'))
   );

    gulp.task('watch', function() {
        gulp.watch('./scss/*.scss', gulp.series('sass'));
  });

   // Default Task
    gulp.task('default', gulp.parallel('watch'));