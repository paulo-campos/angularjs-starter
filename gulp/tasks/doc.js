module.exports = function (plugins) {
    return function () {
        plugins.gulp.src('./doc/', { read : false })
            .pipe(plugins.rimraf({ force : true }));

        plugins.gulp.src([ 'README.md', './dev/app/**/*.js' ], { read : false })
            .pipe(plugins.jsdoc3({ opts : { destination : './doc/' } }));
    };
};
