gulp    = require 'gulp'
replace = require 'gulp-replace'
useref  = require 'gulp-useref'
gulpif  = require 'gulp-if'
htmlmin = require 'gulp-htmlmin'
cssnano = require 'gulp-cssnano'
uglify  = require 'gulp-uglify'

path = require('./../settings/paths.coffee').paths
#====================

gulp.task 'htmlmin-partials', ->
    gulp.src path.html_files
        .pipe useref()
        .pipe gulpif '*.html', htmlmin(
            removeComments: true
            collapseWhitespace: true
        )
        .pipe gulp.dest path.app_folder


gulp.task 'htmlmin-index', ->
    gulp.src path.index_file
        .pipe replace '<!-- inject:cordova -->', '<script src="cordova.js"></script>'
        .pipe useref()
        .pipe gulpif '*.css', cssnano()
        .pipe gulpif '*.js', uglify()
        .pipe gulpif '*.html', htmlmin(
            removeComments: true
            collapseWhitespace: true
        )
        .pipe gulp.dest path.dist_folder
