module.exports = function (plugins, sync) {
    plugins.gulp.task('cache',        getTask('cache'));
    plugins.gulp.task('doc',          getTask('doc'));
    plugins.gulp.task('compass',      getTask('compass'));
    plugins.gulp.task('clear',        getTask('clear'));
    plugins.gulp.task('copy',         getTask('copy'));
    plugins.gulp.task('htmlmin',      getTask('htmlmin'));
    plugins.gulp.task('deploy:dist',  getTask('deploy-dist'));
    plugins.gulp.task('deploy:prod',  getTask('deploy-prod'));

    function getTask (task) {
        return require('./tasks/' + task)(plugins, sync);
    }
    ////////////////////

    return {
        compileDev : function (done) {
            return plugins.runSequence('cache', 'doc', 'compass', done);
        },
        compileDist : function (done) {
            return plugins.runSequence('clear', 'copy', 'htmlmin', 'deploy:dist', done);
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

            plugins.gulp.watch('./dev/app/**/*.html', [ 'cache'   ]);
            plugins.gulp.watch('./dev/app/**/*.js',   [ 'doc'     ]);
            plugins.gulp.watch('./dev/app/**/*.scss', [ 'compass' ]);
            plugins.gulp.watch([
                './dev/index.html',
                './dev/assets/**/*',
                './dev/app/**/*.{js,html}',
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
        serveDist : function (done) {
            sync.dist.init({
                server : './dist/',
                port   : 5000
            }, done)
        }
    }
};
