gulp  = require 'gulp'
jsdoc = require 'gulp-jsdoc'

path = require('./../settings/paths.coffee').paths
#====================

gulp.task 'docs', ->
    gulp.src path.js_files
    	.pipe jsdoc path.docs_folder
