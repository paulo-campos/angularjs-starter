module.exports = function (plugins) {
    return function () {
        return plugins.gulp.src('./build', { read : false })
            .pipe(plugins.rimraf({ force : true }));
    };
};
