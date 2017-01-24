gulp   = require 'gulp'
rimraf = require 'gulp-rimraf'
jsdoc  = require 'gulp-jsdoc3'

paths = require('./../settings/paths').paths
#====================

gulp.task 'doc', ->
    gulp.src [ paths.readme_file, paths.js_files ], read : false
    	.pipe jsdoc (
            'opts' :
                'destination' : paths.doc_folder
        )
