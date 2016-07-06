gulp   = require 'gulp'
jshint = require 'gulp-jshint'

path = require('./../settings/paths.coffee').paths
#====================

gulp.task 'jshint', ->
    gulp.src path.js_files
        .pipe jshint()
        .pipe jshint.reporter 'default'
