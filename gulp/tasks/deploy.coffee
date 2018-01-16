module.exports = (plugins) ->
    return () ->
        plugins.gulp.src './dist/index.html'
            .pipe plugins.replace 'http://localhost:3000/', 'https://paulo-campos.github.io/portfolio/'
            .pipe plugins.gulp.dest './dist/'
