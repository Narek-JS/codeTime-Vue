
module.exports = () => {
    const { plagins:{ browserSync } } = app;
    const baseDir = app.path.build.html;
    
    browserSync.init({
        server: { baseDir },
        notify: false,
        port: 3001
    });
};
