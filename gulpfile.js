const plugins = require('gulp-load-plugins')({
    pattern : ['*'],
    scope   : ['devDependencies']
});

const sync = {
    dev  : plugins.browserSync.create(),
    doc  : plugins.browserSync.create(),
    dist : plugins.browserSync.create()
};

const registers = require('./gulp/registers')(plugins, sync);
////////////////////

plugins.gulp.task('default', () => {
    console.log('=================================');
    console.log('|                                |');
    console.log('|    Use the commands:           |');
    console.log('|      $ gulp compile:dev        |');
    console.log('|      $ gulp compile:dist      |');
    console.log('|      $ gulp compile:prod       |');
    console.log('|      $ gulp serve:dev          |');
    console.log('|      $ gulp serve:doc          |');
    console.log('|      $ gulp serve:dist        |');
    console.log('|                                |');
    console.log('=================================');
});

plugins.gulp.task('compile:dev',                       registers.compileDev);
plugins.gulp.task('compile:dist', [ 'compile:dev' ],   registers.compileDist);
plugins.gulp.task('compile:prod', [ 'compile:dev' ],   registers.compileProd);
plugins.gulp.task('serve:dev',    [ 'compile:dev' ],   registers.serveDev);
plugins.gulp.task('serve:doc',    [ 'compile:dev' ],   registers.serveDoc);
plugins.gulp.task('serve:dist',   [ 'compile:dist' ],  registers.serveDist);
