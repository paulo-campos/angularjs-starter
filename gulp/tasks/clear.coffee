gulp   = require 'gulp'
rimraf = require 'gulp-rimraf'

paths = require('./../settings/paths').paths
#====================

gulp.task 'clear', ->
    gulp.src paths.dist_folder, read : false
        .pipe rimraf force : true
