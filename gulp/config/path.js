const { ROOT_FOLDERS, PATHS: { BUILD, SRC, WATCH } } = require('../consts');

const path = require('path');;
const rootFolder = path.basename(path.resolve());

module.exports = {
    build : {
        javascript: BUILD.JAVASCRIPT,
        css: BUILD.CSS,
        html: BUILD.HTML,
        files: BUILD.FILES,
        images: BUILD.IMAGES
    },
    src: {
        javascript: SRC.JAVASCRIPT,
        scss: SRC.SCSS,
        html: SRC.HTML,
        files: SRC.FILES,
        images: SRC.IMAGES
    },
    watch: {
        javascript: WATCH.JAVASCRIPT,
        scss: WATCH.SCSS,
        html: WATCH.HTML,
        files: WATCH.FILES,
        images: WATCH.IMAGES
    },
    clean: ROOT_FOLDERS.BUILD_FOLDER,
    buildFolder: ROOT_FOLDERS.BUILD_FOLDER,
    scrFolder: ROOT_FOLDERS.SRC_FOLDER,
    rootFolder,
};

