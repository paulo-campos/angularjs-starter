ulp  = require 'gulp'
jsdoc = require 'gulp-jsdoc'

path = require('./../settings/paths.coffee').paths
#====================

gulp.task 'dist-deploy', ->
    gulp.src dist_folder + index_file
        .pipe replace deploy.dev, deploy.dist
        .pipe gulp.dest dist_folder


gulp.task 'prod-deploy', ->
    gulp.src dist_folder + index_file
        .pipe replace deploy.dist, deploy.prod
        .pipe gulp.dest dist_folder
