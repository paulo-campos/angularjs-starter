gulp = require 'gulp'

paths = require('./../settings/paths.coffee').paths
#====================

gulp.task 'copy', ->
    gulp.src paths.htaccess_file, read: false
        .pipe clean paths.dist_folder
        .pipe gulp.dest paths.dist_folder

gulp.task 'copy', ->
    gulp.src [ paths.assets_files, '!' + paths.css_files ], read: false
        .pipe gulp.dest paths.assets_folder
