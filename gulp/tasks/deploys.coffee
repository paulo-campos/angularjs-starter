gulp    = require 'gulp'
replace = require 'gulp-replace'

paths = require('./../settings/paths').paths
#====================

gulp.task 'deploy-dist', ->
    gulp.src paths.dist_folder + paths.index_file
        .pipe replace paths.deploy.dev, paths.deploy.dist
        .pipe gulp.dest paths.dist_folder


gulp.task 'deploy-prod', ->
    gulp.src paths.dist_folder + paths.index_file
        .pipe replace paths.deploy.dist, paths.deploy.prod
        .pipe gulp.dest paths.dist_folder
