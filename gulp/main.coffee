gulp     = require 'gulp'
register = require('./tasks/registers.coffee').registers
#====================

gulp.task 'default', ->
    console.log '=================================='
    console.log '|                                |'
    console.log '|    Use commands:               |'
    console.log '|      $ gulp compile:config     |'
    console.log '|      $ gulp compile:dev        |'
    console.log '|      $ gulp compile:dist       |'
    console.log '|      $ gulp compile:prod       |'
    console.log '|      $ gulp watch:dev          |'
    console.log '|      $ gulp watch:doc          |'
    console.log '|      $ gulp watch:dist         |'
    console.log '|                                |'
    console.log '=================================='


gulp.task 'compile:config',                      (done) -> register.compileConfig  done
gulp.task 'compile:dev',                         (done) -> register.compileDev     done
gulp.task 'compile:dist',    [ 'compile:dev'  ], (done) -> register.compileDist    done
gulp.task 'compile:prod',    [ 'compile:dist' ], (done) -> register.compileProd    done
gulp.task 'watch:dev',       [ 'compile:dev'  ], (done) -> register.watchDev       done
gulp.task 'watch:doc',       [ 'watch:dev'    ], (done) -> register.watchDoc       done
gulp.task 'watch:dist',      [ 'compile:dist' ], (done) -> register.watchDist      done
