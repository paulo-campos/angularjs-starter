module.exports = (plugins) ->
    return () ->
        plugins.gulp.src './dev/assets/**/*'
            .pipe plugins.gulp.dest './dist/assets/'

        plugins.gulp.src './dev/icons/**/*'
            .pipe plugins.gulp.dest './dist/icons/'
        
        plugins.gulp.src './dev/*.{js,json}'
            .pipe plugins.gulp.dest './dist/'