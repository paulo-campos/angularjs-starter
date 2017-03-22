module.exports = plugins => {
    return () => {
        plugins.gulp.src('./dev/app/**/*.html')
            .pipe(plugins.angularTemplatecache())
            .pipe(plugins.gulp.dest('./dev/'));
    };
};
