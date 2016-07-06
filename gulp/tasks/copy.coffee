gulp = require 'gulp'

path = require('./../settings/paths.coffee').paths
#====================

gulp.task 'copy', ->
    gulp.src path.htaccess_file
        .pipe gulp.dest path.dist_folder

    gulp.src [ path.assets_files, '!' + path.css_files ]
        .pipe gulp.dest path.assets_folder
