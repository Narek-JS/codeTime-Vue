const sassView = require('sass');
const gulpSass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const autoPrefixer = require('gulp-autoprefixer');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const beautifyCssCode = require('gulp-cssbeautify');

const sass = gulpSass(sassView)

module.exports = () => {
    const { 
        gulp, 
        path: { 
            src: { scss }, 
            build: { css } 
        }, 
        plagins: { 
            browserSync,
            plumber, 
            notify, 
            replace 
        } 
    } = app;
    
    return gulp.src(scss, { sourcemaps: true })
        .pipe(plumber(notify.onError({
            title: 'SCSS',
            message: 'Error: <%= error.message %>'
        })))
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(groupCssMediaQueries())
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: ["last 3 version"],
            cascade: true
        }))
        .pipe(replace(/@images\//g, '../assets/images/'))
        .pipe(replace(/@svg\//g, '../assets/svg/'))
        
        .pipe(cleanCss())
        .pipe(beautifyCssCode({
            indent: '  ',
            openbrace: 'separate-line',
            autosemicolon: true
        }))
        .pipe(gulp.dest(css))
        .pipe(browserSync.stream())
};
