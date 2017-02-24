module.exports = function (plugins) {
    return function () {
        plugins.gulp.src('./dev/.htaccess')
            .pipe(plugins.gulp.dest('./build/'));

        plugins.gulp.src('./dev/assets/**/*')
            .pipe(plugins.gulp.dest('./build/assets/'));
    };
};
