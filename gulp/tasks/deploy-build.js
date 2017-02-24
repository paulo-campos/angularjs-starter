module.exports = function (plugins) {
    return function () {
        plugins.gulp.src('./build/index.html')
            .pipe(plugins.replace('localhost:3000/', 'localhost:5000/'))
            .pipe(plugins.gulp.dest('./build/'));
    };
};
