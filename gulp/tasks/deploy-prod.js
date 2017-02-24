module.exports = function (plugins) {
    return function () {
        plugins.gulp.src('./build/index.html')
            .pipe(plugins.replace('localhost:5000/', 'http://paulocampos.esy.es/'))
            .pipe(plugins.gulp.dest('./build/'));
    };
};
