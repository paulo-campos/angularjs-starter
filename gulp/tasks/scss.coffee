gulp    = require 'gulp'
clean   = require 'gulp-clean-dest'
compass = require 'gulp-compass'

paths = require('./../settings/paths.coffee').paths
sync  = require('./../settings/sync.coffee').sync
#====================

gulp.task 'scss', ->
    gulp.src paths.scss_files
        .pipe clean paths.css_folder
        .pipe compass
            config_file: paths.compass_file
            sass:        paths.scss_folder
            css:         paths.css_folder
        .on 'error', ->
            process.exit 1
        .pipe gulp.dest paths.css_folder
        .pipe sync.dev.stream()
