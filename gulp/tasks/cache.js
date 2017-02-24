module.exports = function (plugins) {
    return function () {
        plugins.gulp.src('./dev/app/**/*.html')
            .pipe(plugins.angularTemplatecache())
            .pipe(plugins.gulp.dest('./dev/'));
    };
};
