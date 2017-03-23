module.exports = (plugins, sync) => {
    getTask = task => require('./tasks/' + task)(plugins, sync);
    
    plugins.gulp.task('cache',        getTask('cache'));
    plugins.gulp.task('doc',          getTask('doc'));
    plugins.gulp.task('compass',      getTask('compass'));
    plugins.gulp.task('clean',        getTask('clean'));
    plugins.gulp.task('copy',         getTask('copy'));
    plugins.gulp.task('useref',       getTask('useref'));
    plugins.gulp.task('deploy:dist',  getTask('deploy-dist'));
    plugins.gulp.task('deploy:prod',  getTask('deploy-prod'));
    ////////////////////

    return {
        compileDev  : done => plugins.runSequence('cache', 'doc', 'compass', done),
        compileDist : done => plugins.runSequence('clean', 'copy', 'useref', 'deploy:dist', done),
        compileProd : done => plugins.runSequence('clean', 'copy', 'useref', 'deploy:prod', done),
        serveDev    : done => {
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
        serveDoc : done => {
            sync.doc.init({
                server : './doc/',
                port   : 4000
            }, done);

            plugins.gulp.watch('./dev/app/**/*.js', [ 'doc' ]);
            plugins.gulp.watch('./doc/**/*')
                .on('change', sync.doc.reload);
        },
        serveDist : done => {
            sync.dist.init({
                server : './dist/',
                port   : 5000
            }, done)
        }
    }
};
