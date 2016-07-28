gulp   = require 'gulp'
jshint = require 'gulp-jshint'

paths = require('./../settings/paths').paths
#====================

gulp.task 'jshint', ->
    gulp.src paths.js_files
        .pipe jshint(
            'browser' : true,
            'strict'  : true
        )
        .pipe jshint.reporter 'default'
