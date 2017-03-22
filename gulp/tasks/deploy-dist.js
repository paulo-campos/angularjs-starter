module.exports = plugins => {
    return () => {
        plugins.gulp.src('./dist/index.html')
            .pipe(plugins.replace('http://localhost:3000/', 'http://localhost:5000/'))
            .pipe(plugins.gulp.dest('./dist/'));
    };
};
