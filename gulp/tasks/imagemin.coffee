gulp    = require 'gulp'
imageop = require 'gulp-image-optimization'

paths = require('./../settings/paths').paths
#====================

gulp.task 'imagesmin', (done) ->
    gulp.src paths.images_files
        .pipe imageop(
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        )
        .pipe gulp.dest paths.images_folder
