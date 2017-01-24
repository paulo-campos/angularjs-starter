const gulp      = require('gulp');
const sequence  = require('run-sequence');
const cache     = require('gulp-angular-templatecache');
const rimraf    = require('gulp-rimraf');
const jsdoc     = require('gulp-jsdoc3');
const compass   = require('gulp-compass');
const useref    = require('gulp-useref');
const gulpif    = require('gulp-if');
const htmlmin   = require('gulp-htmlmin');
const cssnano   = require('gulp-cssnano');
const uglify    = require('gulp-uglify');
const replace   = require('gulp-replace');
const browser   = require('browser-sync');

const sync = {
    dev  : browser.create(),
    doc  : browser.create(),
    dist : browser.create()
};
////////////////////

gulp.task('default', () => {
    console.log('=================================');
    console.log('|                               |');
    console.log('|    Use commands:              |');
    console.log('|      $ gulp compile:dev       |');
    console.log('|      $ gulp compile:dist      |');
    console.log('|      $ gulp compile:prod      |');
    console.log('|      $ gulp serve:dev         |');
    console.log('|      $ gulp serve:doc         |');
    console.log('|      $ gulp serve:dist        |');
    console.log('|                               |');
    console.log('=================================');
});

gulp.task('compile:dev',                      (done) => sequence('cache', 'doc', 'scss', done));
gulp.task('compile:dist', [ 'compile:dev'  ], (done) => sequence('clear', 'copy', 'htmlmin-partials', 'htmlmin-index', 'deploy-dist', done));
gulp.task('compile:prod', [ 'compile:dist' ], (done) => sequence('deploy-prod', done));
gulp.task('serve:dev',    [ 'compile:dev'  ], (done) => {
    sync.dev.init({
        server : {
            baseDir : 'dev/',
            routes  : { '/node_modules' : 'node_modules' }
        },
        port   : 3000
    }, done);

    gulp.watch(paths.html_files, [ 'cache' ]);
    gulp.watch('dev/app/**/*.js',   [ 'doc'   ]);
    gulp.watch('dev/app/**/*.{css,map}', [ 'scss'  ]);
    gulp.watch([
        './dev/index.html',
        'dev/assets/**/*',
        'dev/app/**/*.{js,css,html}',
        '!' + 'dev/app/**/*.{css,map}'
    ])
    .on('change', sync.dev.reload);
});

gulp.task('serve:doc', [ 'compile:dev'  ], (done) => {
    sync.doc.init({
        server : 'doc/',
        port   : 4000
    }, done);

    gulp.watch('dev/app/**/*.js', [ 'doc' ]);
    gulp.watch('doc/**/*')
        .on('change', sync.doc.reload);
});

gulp.task('serve:dist', [ 'compile:dist' ], (done) => {
    sync.dist.init({
        server : 'dist/',
        port   : 5000
    }, done)
});
////////////////////

gulp.task('cache', () => {
    return gulp.src('dev/app/**/*.html')
        .pipe(cache())
        .pipe(gulp.dest('dev/'))
});

gulp.task('doc', () => {
    gulp.src('doc/', { read : false })
        .pipe(rimraf({ force : true }))

    return gulp.src([ 'README.md', 'dev/app/**/*.js' ], { read : false })
    	.pipe(jsdoc({ opts : { destination : 'doc/' } }))
});

gulp.task('scss', () => {
    gulp.src('dev/app/**/*.{css,map}', { read : false })
        .pipe(rimraf({ force : true }));

    return gulp.src('dev/scss/**/*.scss')
        .pipe(compass({
            sass      : 'dev/scss/',
            css       : 'dev/app/',
            image     : 'dev/assets/images/app',
            font      : 'dev/assets/fonts',
            relative  : true,
            comments  : true,
            sourcemap : true,
            style     : 'expanded'
        }))
        .on('error', () => process.exit(1))
        .pipe(gulp.dest('dev/app/'))
        .pipe(sync.dev.stream());
});

gulp.task('clear', () => {
    return gulp.src('dist/', { read : false })
        .pipe(rimraf({ force : true }));
});

gulp.task('copy', () => {
    gulp.src('dev/.htaccess')
        .pipe(gulp.dest('dist/'))

    gulp.src('dev/assets/**/*')
        .pipe(gulp.dest('dist/assets/'))
});

gulp.task('htmlmin-partials', () => {
    return gulp.src('dev/app/**/*.html')
        .pipe(useref())
        .pipe(gulpif('*.html', htmlmin({
            removeComments     : true,
            collapseWhitespace : true
        })))
        .pipe(gulp.dest('dist/app/'))
});

gulp.task('htmlmin-index', () => {
    return gulp.src('./dev/index.html')
        .pipe(useref())
        .pipe(gulpif('*.css',  cssnano()))
        .pipe(gulpif('*.js',   uglify()))
        .pipe(gulpif('*.html', htmlmin({
            minifyJS           : true,
            removeComments     : true,
            collapseWhitespace : true
        })))
        .pipe(gulpif('*.css', cssnano({ discardComments : { removeAll : true } })))
        .pipe(gulp.dest('dist/'))
});

gulp.task('deploy-dist', () => {
    return gulp.src('./dist/index.html')
        .pipe(replace('localhost:3000/', 'localhost:5000/'))
        .pipe(gulp.dest('dist/'))
});

gulp.task('deploy-prod', () => {
    return gulp.src('./dist/index.html')
        .pipe(replace('localhost:5000/', 'http://paulocampos.esy.es/'))
        .pipe(gulp.dest('dist/'))
});
