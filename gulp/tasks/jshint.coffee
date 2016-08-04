gulp   = require 'gulp'
jshint = require 'gulp-jshint'

paths = require('./../settings/paths').paths
#====================

gulp.task 'jshint', ->
    gulp.src paths.js_files
        .pipe jshint(
            'indent'  : 4,
            'strict'  : true,
            'browser' : true,
            'expr'    : true
        )
        .pipe jshint.reporter 'default'
