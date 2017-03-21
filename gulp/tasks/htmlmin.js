module.exports = function (plugins) {
    return function () {
        return plugins.gulp.src('./dev/**/*.html')
            .pipe(plugins.useref())
            .pipe(plugins.if('*.js',  plugins.uglify()))
            .pipe(plugins.if('*.css', plugins.cssnano({
                discardComments : { removeAll : true }
            })))
            .pipe(plugins.if('*.html', plugins.htmlmin({
                minifyJS           : true,
                removeComments     : true,
                collapseWhitespace : true
            })))
            .pipe(plugins.gulp.dest('./dist/'));
    };
};
