module.exports = function (plugins) {
    return function () {
        return plugins.gulp.src('./dist', { read : false })
            .pipe(plugins.rimraf({ force : true }));
    };
};
