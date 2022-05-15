const PATHS = {
    BUILD: {
        JAVASCRIPT: "./projectBuildTime/js/",
        CSS: "./projectBuildTime/css/",
        HTML: "./projectBuildTime/",
        FILES: "./projectBuildTime/assets/",
        IMAGES: "./projectBuildTime/assets/images"
    },
    SRC: {
        JAVASCRIPT: "./projectDevelopmentTime/js/*.js",
        SCSS: "./projectDevelopmentTime/scss/main.scss",
        HTML: "./projectDevelopmentTime/*.pug",
        FILES: "./projectDevelopmentTime/assets/**/*.*",
        IMAGES: "./projectDevelopmentTime/assets/images/**/*.*"
    },
    WATCH: {
        JAVASCRIPT: "./projectDevelopmentTime/js/*.js",
        SCSS: "./projectDevelopmentTime/scss/**/*.scss",
        HTML: "./projectDevelopmentTime/**/*.pug",
        FILES: "./projectDevelopmentTime/assets/**/*.*",
        IMAGES: "./projectDevelopmentTime/assets/images/**/*.*"
    }
};

const ROOT_FOLDERS = {
    BUILD_FOLDER: "./projectBuildTime",
    SRC_FOLDER: "./projectDevelopmentTime"
}

module.exports = {
    PATHS,
    ROOT_FOLDERS
}