#### Loaders
gulp        = require 'gulp'
runSequence = require 'run-sequence'
cache       = require 'gulp-angular-templatecache'
jshint      = require 'gulp-jshint'
jsdoc       = require 'gulp-jsdoc'
compass     = require 'gulp-compass'
clean       = require 'gulp-clean'
useref      = require 'gulp-useref'
gulpif      = require 'gulp-if'
htmlmin     = require 'gulp-htmlmin'
cssnano     = require 'gulp-cssnano'
uglify      = require 'gulp-uglify'
replace     = require 'gulp-replace'
browserSync = require 'browser-sync'
syncDev     = browserSync.create()
syncDoc     = browserSync.create()


#### Config
starter_project =
    repository  : 'https://github.com/paulovitorwd/ionic-starter'
    name        : 'angularjs-starter'
    version     : '1.0.0'
    description : 'This project aims to streamline starting an application in AngularJS'
    title       : 'AngularJS Starter'
    keywords    : 'javascript, js, script, framework, angular, angularjs, starter'
    author      : 'Paulo Campos'
    email       : 'paulovitorwd@gmail.com'
new_project =
    repository  : '' # {string} Enter with the repository of project
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
docs_folder   = 'documentation'
docs_files    = 'documentation/**/*'
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
    doc:
        server: docs_folder,
        port:   4000
    dist:
        server: dist_folder,
        port:   4000
deploy =
    dev:  'http://localhost:' + server.dev.port + '/'
    dist: 'http://localhost:' + server.dist.port + '/'
    prod: 'http://paulofrontend.com.br/' # {string} Enter with the url site of production


#### Registers
gulp.task 'default', ->
    console.log '============================='
    console.log '|                           |'
    console.log '|    Use commands:          |'
    console.log '|      $ gulp config        |'
    console.log '|      $ gulp compile       |'
    console.log '|      $ gulp watch         |'
    console.log '|      $ gulp docs          |'
    console.log '|      $ gulp compress      |'
    console.log '|      $ gulp review        |'
    console.log '|      $ gulp prod          |'
    console.log '|                           |'
    console.log '============================='


gulp.task 'config', (done) ->
    runSequence 'start', done


gulp.task 'compile', (done) ->
    runSequence 'cache', 'jshint', 'doc-clean', 'doc', 'css-clean', 'scss', done


gulp.task 'watch', ['compile'], (done) ->
    syncDev.init server.dev, done

    gulp.watch html_files, ['cache']
    gulp.watch js_files,   ['jshint', 'doc']
    gulp.watch scss_files, ['scss']
    gulp.watch([dev_folder + index_file, app_files ]).on 'change', browserSync.reload


gulp.task 'docs', ['watch'], (done) ->
    syncDoc.init server.doc, done

    gulp.watch(docs_files).on 'change', syncDoc.reload


gulp.task 'compress', ['compile'], (done) ->
    runSequence 'copy', 'partials-min', 'index-min', 'dist-deploy', done


gulp.task 'review', ['compress'], (done) ->
    browserSync.init server.dist, done


gulp.task 'prod', ['compress'], (done) ->
    runSequence 'prod-deploy', done


#### Units
gulp.task 'start', ->
    count   = 0
    newData = Object.getOwnPropertyNames new_project

    for data in newData
        do (data) ->
            count++ if new_project[data] is '' or typeof new_project[data] isnt 'string'

    if count
        console.log '==========================================='
        console.log '|                                         |'
        console.log '|    Please, fill all data of the new     |'
        console.log '|    project before running this task!    |'
        console.log '|                                         |'
        console.log '==========================================='
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


gulp.task 'doc-clean', ->
    gulp.src docs_files, read: false
        .pipe clean()


gulp.task 'doc', ->
    gulp.src js_files
    	.pipe jsdoc docs_folder


gulp.task 'css-clean', ->
    gulp.src css_files, read: false
        .pipe clean()

gulp.task 'scss', ->
    gulp.src scss_files
        .pipe compass
            config_file: compass_file
            sass:        scss_folder
            css:         css_folder
        .on 'error', ->
            process.exit 1
        .pipe gulp.dest css_folder
        .pipe syncDev.stream()


gulp.task 'dist-clean', ->
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


gulp.task 'dist-deploy', ->
    gulp.src dist_folder + index_file
        .pipe replace deploy.dev, deploy.dist
        .pipe gulp.dest dist_folder


gulp.task 'prod-deploy', ->
    gulp.src dist_folder + index_file
        .pipe replace deploy.dist, deploy.prod
        .pipe gulp.dest dist_folder
