const del = require('del');

module.exports = () => {
    const { path: { clean } } = app;
    return del(clean);
};

