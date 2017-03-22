module.exports = plugins => {
    return () => {
        plugins.gulp.src('./dev/.htaccess')
            .pipe(plugins.gulp.dest('./dist/'));

        plugins.gulp.src('./dev/assets/**/*')
            .pipe(plugins.gulp.dest('./dist/assets/'));
    };
};
