const TO_GULP_TASKS = './gulp/tasks';
const TO_GULP_CONFIG = './gulp/config';

const gulp = require('gulp');
const server = require('./gulp/server.js');
const path = require(`${TO_GULP_CONFIG}/path.js`);
const plagins = require(`${TO_GULP_CONFIG}/plugins.js`);
const reset = require(`${TO_GULP_TASKS}/reset.js`);
const { copy, replaceAllImagesToWebp } = require(`${TO_GULP_TASKS}/copy.js`);
const htmlTaskMeneger = require(`${TO_GULP_TASKS}/html.js`);
const scssTaskMeneger = require(`${TO_GULP_TASKS}/scss.js`);
const javascriptTaskMeneger = require(`${TO_GULP_TASKS}/javascript.js`);

global.app = { path, gulp, plagins };

const watcher = () => {
    const { watch: { files, html, scss, javascript, images }} = path;
    
    gulp.watch(files, copy);
    gulp.watch(images, replaceAllImagesToWebp)
    gulp.watch(html, htmlTaskMeneger);
    gulp.watch(scss, scssTaskMeneger);
    gulp.watch(javascript, javascriptTaskMeneger);
};

const allTasksMeneger = [
    copy, 
    replaceAllImagesToWebp,
    htmlTaskMeneger, 
    scssTaskMeneger, 
    javascriptTaskMeneger
];

const mainTasks = gulp.parallel(...allTasksMeneger);
const updateAndListenServer = gulp.parallel(watcher, server);

const dev = gulp.series(reset, mainTasks, updateAndListenServer);

gulp.task('default', dev);