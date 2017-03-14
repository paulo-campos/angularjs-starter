module.exports = function (plugins, sync) {
    plugins.gulp.task('cache',        getTask('cache'));
    plugins.gulp.task('doc',          getTask('doc'));
    plugins.gulp.task('scss',         getTask('scss', sync));
    plugins.gulp.task('clear',        getTask('clear'));
    plugins.gulp.task('copy',         getTask('copy'));
    plugins.gulp.task('htmlmin',      getTask('htmlmin'));
    plugins.gulp.task('deploy:build', getTask('deploy-build'));
    plugins.gulp.task('deploy:prod',  getTask('deploy-prod'));

    function getTask (task, sync) {
        return require('./tasks/' + task)(plugins, sync);
    }
    ////////////////////

    return {
        compileDev : function (done) {
            return plugins.runSequence('cache', 'doc', 'scss', done);
        },
        compileBuild : function (done) {
            return plugins.runSequence('clear', 'copy', 'htmlmin', 'deploy:build', done);
        },
        compileProd : function (done) {
            return plugins.runSequence('clear', 'copy', 'htmlmin', 'deploy:prod', done);
        },
        serveDev : function (done) {
            sync.dev.init({
                server : {
                    baseDir : './dev/',
                    routes  : { '/node_modules' : 'node_modules' }
                },
                port : 3000
            }, done);

            plugins.gulp.watch('./dev/app/**/*.html', [ 'cache' ]);
            plugins.gulp.watch('./dev/app/**/*.js',   [ 'doc'   ]);
            plugins.gulp.watch('./dev/app/**/*.scss', [ 'scss'  ]);
            plugins.gulp.watch([
                './dev/index.html',
                './dev/assets/**/*',
                './dev/app/**/*.{js,css,html}',
                '!' + './dev/app/**/*.{css,map}'
            ])
            .on('change', sync.dev.reload);
        },
        serveDoc : function(done) {
            sync.doc.init({
                server : './doc/',
                port   : 4000
            }, done);

            plugins.gulp.watch('./dev/app/**/*.js', [ 'doc' ]);
            plugins.gulp.watch('./doc/**/*')
                .on('change', sync.doc.reload);
        },
        serveBuild : function (done) {
            sync.build.init({
                server : './build/',
                port   : 5000
            }, done)
        }
    }
};
