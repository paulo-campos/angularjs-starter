module.exports = function (plugins) {
    return function () {
        plugins.gulp.src('./dist/index.html')
            .pipe(plugins.replace('http://localhost:3000/', 'http://paulocampos.esy.es/'))
            .pipe(plugins.gulp.dest('./dist/'));
    };
};
