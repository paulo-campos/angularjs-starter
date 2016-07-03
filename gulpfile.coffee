#### Loaders
gulp        = require 'gulp'
runSequence = require 'run-sequence'
cache       = require 'gulp-angular-templatecache'
jshint      = require 'gulp-jshint'
compass     = require 'gulp-compass'
clean       = require 'gulp-clean'
useref      = require 'gulp-useref'
gulpif      = require 'gulp-if'
htmlmin     = require 'gulp-htmlmin'
cssnano     = require 'gulp-cssnano'
uglify      = require 'gulp-uglify'
replace     = require 'gulp-replace'
browserSync = require 'browser-sync'


#### Config
starter_project =
    name        : 'angularjs-starter'
    version     : '1.0.0'
    description : 'This project aims to streamline starting an application in AngularJS'
    title       : 'AngularJS Starter'
    keywords    : 'javascript, js, script, framework, angular, angularjs, starter'
    author      : 'Paulo Campos'
    email       : 'paulovitorwd@gmail.com'
new_project =
    name        : '' # {string} Enter with the name of project
    version     : '' # {string} Enter with the version of project
    description : '' # {string} Enter with the description of project
    title       : '' # {string} Enter with the title of project
    keywords    : '' # {string} Enter with the version of project
    author      : '' # {string} Enter with the name of author
    email       : '' # {string} Enter with the email of author
root_folder   = './'
package_file  = 'package.json'
bower_file    = 'bower.json'
compass_file  = 'config.rb'
dev_folder    = 'dev/'
dist_folder   = 'dist/'
index_file    = 'index.html'
htaccess_file = 'dev/.htaccess'
js_files      = 'dev/app/**/*.js'
js_folder     = 'dev/app/'
scss_folder   = 'dev/scss/'
scss_files    = 'dev/scss/**/*.scss'
assets_files  = 'dev/assets/**/*'
css_folder    = 'dev/assets/stylesheets/'
css_files     = 'dev/assets/stylesheets/**/*'
app_files     = 'dev/app/**/*'
html_files    = 'dev/app/**/*.html'
assets_folder = 'dist/assets/'
app_folder    = 'dist/app/'
server =
    dev:
        server: dev_folder,
        port:   3000
    dist:
        server: dist_folder,
        port:   4000
deploy =
    work:  'http://localhost:' + server.dev.port + '/'
    build: 'http://localhost:' + server.dist.port + '/'
    prod:  'http://paulofrontend.com.br/' # {string} Enter with the url site of production


#### Registers
gulp.task 'default', ->
    console.log '=============================='
    console.log '                              '
    console.log '    Use commands:             '
    console.log '      \'$ gulp config\'       '
    console.log '      \'$ gulp compile\'      '
    console.log '      \'$ gulp watch\'        '
    console.log '      \'$ gulp build\'        '
    console.log '      \'$ gulp check\'        '
    console.log '      \'$ gulp prod\'         '
    console.log '                              '
    console.log '=============================='


gulp.task 'config', (done) ->
    runSequence 'start', done


gulp.task 'compile', (done) ->
    runSequence 'cache', 'jshint', 'scss', done


gulp.task 'watch', ['compile'], ->
    browserSync.init server.dev

    gulp.watch html_files, ['cache']
    gulp.watch js_files,   ['jshint']
    gulp.watch scss_files, ['scss']
    gulp.watch([
        dev_folder + index_file,
        app_files
    ]).on 'change', browserSync.reload


gulp.task 'build', ['compile'], (done) ->
    runSequence 'clean', 'copy', 'partials-min', 'index-min', 'deploy-build', done


gulp.task 'check', ['build'], ->
    browserSync.init server.dist


gulp.task 'prod', ['build'], (done) ->
    runSequence 'deploy-prod', done


#### Units
gulp.task 'start', ->
    count   = 0
    newData = Object.getOwnPropertyNames new_project

    for data in newData
        do (data) ->
            count++ if new_project[data] is '' or typeof new_project[data] isnt 'string'
    if count
        console.log '=============================================================='
        console.log '                                                              '
        console.log 'Fill the all data of the new project before running this task!'
        console.log '                                                              '
        console.log '=============================================================='
    else
        gulp.src [package_file, bower_file]
            .pipe replace starter_project.name,        new_project.name
            .pipe replace starter_project.version,     new_project.version
            .pipe replace starter_project.description, new_project.description
            .pipe replace starter_project.author,      new_project.author
            .pipe replace starter_project.email,       new_project.email
            .pipe gulp.dest root_folder

        gulp.src dev_folder + index_file
            .pipe replace starter_project.name,        new_project.name
            .pipe replace starter_project.version,     new_project.version
            .pipe replace starter_project.description, new_project.description
            .pipe replace starter_project.title,       new_project.title
            .pipe replace starter_project.keywords,    new_project.keywords
            .pipe replace starter_project.author,      new_project.author
            .pipe replace starter_project.email,       new_project.email
            .pipe gulp.dest dev_folder

        gulp.src js_files
            .pipe replace starter_project.name, new_project.name
            .pipe gulp.dest js_folder


gulp.task 'cache', ->
    gulp.src html_files
        .pipe cache()
        .pipe gulp.dest dev_folder


gulp.task 'jshint', ->
    gulp.src js_files
        .pipe jshint()
        .pipe jshint.reporter('default')


gulp.task 'scss', ->
    gulp.src css_folder
        .pipe clean()

    gulp.src scss_files
        .pipe compass
            config_file: compass_file
            sass:        scss_folder
            css:         css_folder
        .on 'error', ->
            process.exit 1
        .pipe gulp.dest css_folder
        .pipe browserSync.stream()


gulp.task 'clean', ->
    gulp.src dist_folder, read: false
        .pipe clean()


gulp.task 'copy', ->
    gulp.src htaccess_file
        .pipe gulp.dest dist_folder

    gulp.src [
            assets_files,
            '!' + css_files
        ]
        .pipe gulp.dest assets_folder


gulp.task 'partials-min', ->
    gulp.src html_files
        .pipe useref()
        .pipe gulpif '*.html', htmlmin(
            removeComments: true
            collapseWhitespace: true
        )
        .pipe gulp.dest app_folder


gulp.task 'index-min', ->
    gulp.src dev_folder + index_file
        .pipe useref()
        .pipe gulpif '*.css', cssnano()
        .pipe gulpif '*.js', uglify()
        .pipe gulpif '*.html', htmlmin(
            removeComments: true
            collapseWhitespace: true
        )
        .pipe gulp.dest dist_folder


gulp.task 'deploy-build', ->
    gulp.src dist_folder + index_file
        .pipe replace deploy.work, deploy.build
        .pipe gulp.dest dist_folder


gulp.task 'deploy-prod', ->
    gulp.src dist_folder + index_file
        .pipe replace deploy.build, deploy.prod
        .pipe gulp.dest dist_folder
