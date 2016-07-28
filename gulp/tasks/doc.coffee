gulp  = require 'gulp'
clean = require 'gulp-clean-dest'
jsdoc = require 'gulp-jsdoc3'

paths = require('./../settings/paths').paths
#====================

gulp.task 'doc', ->
    gulp.src [ paths.readme_file, paths.js_files ], read : false
        .pipe clean paths.doc_folder
    	.pipe jsdoc (
            'opts' :
                'destination' : paths.doc_folder
        )
