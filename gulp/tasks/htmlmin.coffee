gulp    = require 'gulp'
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
    gulp.src path.dev_folder + path.index_file
        .pipe useref()
        .pipe gulpif '*.css', cssnano()
        .pipe gulpif '*.js', uglify()
        .pipe gulpif '*.html', htmlmin(
            removeComments: true
            collapseWhitespace: true
        )
        .pipe gulp.dest path.dist_folder
