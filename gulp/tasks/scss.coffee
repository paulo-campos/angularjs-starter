gulp    = require 'gulp'
compass = require 'gulp-compass'

path = require('./../settings/paths.coffee').paths
sync = require('./../settings/sync.coffee').sync
#====================

gulp.task 'scss', ->
    gulp.src path.scss_files
        .pipe compass
            config_file: path.compass_file
            sass:        path.scss_folder
            css:         path.css_folder
        .on 'error', ->
            process.exit 1
        .pipe gulp.dest path.css_folder
        .pipe sync.dev.stream()
