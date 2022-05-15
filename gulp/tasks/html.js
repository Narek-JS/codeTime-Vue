const versionNumber = require('gulp-version-number');
const webpHtmlNosvg = require('gulp-webp-html-nosvg');
const beautifyCode = require('gulp-beautify-code');
const pug = require('gulp-pug');

module.exports = () => {
    const { path, gulp, plagins } = app;
    const { replace, plumber, notify, browserSync } = plagins;

    return app.gulp.src(path.src.html)
            .pipe(plumber(notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message %>'
            })))
            .pipe(pug({ pretty:true, verbose:true }))
            .pipe(replace(/@images\//g, './assets/images/'))
            .pipe(replace(/@svg\//g, './assets/svg/'))
            .pipe(webpHtmlNosvg())
            .pipe(versionNumber({
                'value' : '%DT%',
                'append' : {
                    'key' : '_v',
                    'cover' : 0,
                    'to' : [ 'css', 'js' ]
                },
                'output' : {
                    'file': 'gulp/version.json'
                }
            }))
            .pipe(beautifyCode())
            .pipe(gulp.dest(app.path.build.html))
            .pipe(browserSync.stream());
};

