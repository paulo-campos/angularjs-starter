gulp   = require 'gulp'
jshint = require 'gulp-jshint'

paths = require('./../settings/paths.coffee').paths
#====================

gulp.task 'jshint', ->
    gulp.src paths.js_files
        .pipe jshint()
        .pipe jshint.reporter 'default'
