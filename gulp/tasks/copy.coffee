gulp   = require 'gulp'

paths = require('./../settings/paths').paths
#====================

gulp.task 'copy', ->
    gulp.src paths.htaccess_file
        .pipe gulp.dest paths.dist_folder

    gulp.src paths.assets_files
        .pipe gulp.dest paths.assets_folder
