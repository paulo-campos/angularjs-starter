gulp    = require 'gulp'
replace = require 'gulp-replace'

path = require('./../settings/paths.coffee').paths
#====================

gulp.task 'deploy-dist', ->
    gulp.src path.dist_folder + path.index_file
        .pipe replace path.deploy.dev, path.deploy.dist
        .pipe gulp.dest path.dist_folder


gulp.task 'deploy-prod', ->
    gulp.src path.dist_folder + path.index_file
        .pipe replace path.deploy.dist, path.deploy.prod
        .pipe gulp.dest path.dist_folder
