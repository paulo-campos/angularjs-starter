gulp    = require 'gulp'
rimraf  = require 'gulp-rimraf'
compass = require 'gulp-compass'

paths = require('./../settings/paths').paths
sync  = require('./../settings/sync').sync
#====================

gulp.task 'scss', ->
    gulp.src paths.css_files, read : false
        .pipe rimraf force : true

    gulp.src paths.scss_files
        .pipe compass
            sass      : paths.scss_folder
            css       : paths.app_folder
            image     : paths.images_local
            font      : paths.fonts_local
            relative  : true
            comments  : true
            sourcemap : true
            style     : 'expanded'
        .on 'error', ->
            process.exit 1
        .pipe gulp.dest paths.app_folder
        .pipe sync.dev.stream()
