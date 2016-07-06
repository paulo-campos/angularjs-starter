gulp  = require 'gulp'
cache = require 'gulp-angular-templatecache'

path = require('./../settings/paths.coffee').paths
#====================

gulp.task 'cache', ->
    gulp.src path.html_files
        .pipe cache()
        .pipe gulp.dest path.dev_folder
