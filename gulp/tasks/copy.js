const imageMin = require('gulp-imagemin');
const toWebp = require('gulp-webp');

const CopyAndReplaceAllImgToWebp = function () {
        
    this.copy = () => app.gulp.src(app.path.src.files)
                        .pipe(imageMin())
                        .pipe(app.gulp.dest(app.path.build.files))

    this.replaceAllImagesToWebp = () => app.gulp.src(app.path.src.images)
                                    .pipe(toWebp())
                                    .pipe(app.gulp.dest(app.path.build.images))        
};

module.exports = new CopyAndReplaceAllImgToWebp();

