gulp  = require 'gulp'
cache = require 'gulp-angular-templatecache'

paths = require('./../settings/paths').paths
#====================

gulp.task 'cache', ->
    gulp.src paths.html_files
        .pipe cache()
        .pipe gulp.dest paths.dev_folder
