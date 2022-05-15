const beautifyCode = require('gulp-beautify-code');


module.exports = () => {
    const { gulp, path: { src, build } } = app;

    return gulp.src(src.javascript)
            .pipe(beautifyCode())
            .pipe(gulp.dest(build.javascript));
};

