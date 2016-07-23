gulp     = require 'gulp'
register = require('./tasks/registers.coffee').registers
#====================

gulp.task 'default', ->
    console.log '================================='
    console.log '|                               |'
    console.log '|    Use commands:              |'
    console.log '|      $ gulp config:start      |'
    console.log '|      $ gulp compile:dev       |'
    console.log '|      $ gulp compile:dist      |'
    console.log '|      $ gulp compile:prod      |'
    console.log '|      $ gulp serve:dev         |'
    console.log '|      $ gulp serve:doc         |'
    console.log '|      $ gulp serve:dist        |'
    console.log '|                               |'
    console.log '================================='


gulp.task 'config:start',                     (done) -> register.compileConfig done
gulp.task 'compile:dev',                      (done) -> register.compileDev    done
gulp.task 'compile:dist', [ 'compile:dev'  ], (done) -> register.compileDist   done
gulp.task 'compile:prod', [ 'compile:dist' ], (done) -> register.compileProd   done
gulp.task 'serve:dev',    [ 'compile:dev'  ], (done) -> register.serveDev      done
gulp.task 'serve:doc',    [ 'compile:dev'  ], (done) -> register.serveDoc      done
gulp.task 'serve:dist',   [ 'compile:dist' ], (done) -> register.serveDist     done
