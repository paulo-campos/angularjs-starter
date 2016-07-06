gulp    = require 'gulp'
replace = require 'gulp-replace'
clean   = require 'gulp-clean'

path = require('./../settings/paths.coffee').paths
#====================

gulp.task 'clean-docs', ->
    gulp.src path.docs_files, read: false
        .pipe clean()


gulp.task 'clean-css', ->
    gulp.src path.css_files, read: false
        .pipe clean()


gulp.task 'clean-dist', ->
    gulp.src path.dist_folder, read: false
        .pipe clean()
