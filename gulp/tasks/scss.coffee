gulp    = require 'gulp'
clean   = require 'gulp-clean-dest'
compass = require 'gulp-compass'

paths = require('./../settings/paths').paths
sync  = require('./../settings/sync').sync
#====================

gulp.task 'scss', ->
    gulp.src paths.scss_files
        .pipe clean paths.css_folder
        .pipe compass
            sass      : paths.scss_folder
            css       : paths.css_folder
            image     : paths.images_local
            font      : paths.fonts_local
            relative  : true
            comments  : true
            sourcemap : true
            style     : 'expanded'
        .on 'error', ->
            process.exit 1
        .pipe gulp.dest paths.css_folder
        .pipe sync.dev.stream()
