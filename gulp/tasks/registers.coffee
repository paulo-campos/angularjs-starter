gulp      = require 'gulp'
shell     = require 'gulp-shell'
sequence  = require 'run-sequence'
directory = require 'require-dir'

start = require('./../settings/start.coffee').start
path  = require('./../settings/paths.coffee').paths
sync  = require('./../settings/sync.coffee').sync

directory './'
#====================

registers =
    compileConfig : (done) -> sequence 'start',                                                      done
    compileDev    : (done) -> sequence 'cache', 'jshint', 'clean-docs', 'docs', 'clean-css', 'scss', done
    compileDist   : (done) -> sequence 'clean-dist', 'copy', 'htmlmin-partials', 'htmlmin-index',    done

    watchDev  : (done) ->
        sync.dev.init path.server.dev, done
        gulp.watch path.html_files, [ 'cache'          ]
        gulp.watch path.js_files,   [ 'jshint', 'docs' ]
        gulp.watch path.scss_files, [ 'scss'           ]
        gulp.watch([ path.index_file, path.app_files ]).on 'change', sync.dev.reload
    watchDoc  : (done) ->
        sync.doc.init path.server.doc, done
        gulp.watch(path.docs_files).on 'change', sync.doc.reload
    watchDist : (done) -> sync.dist.init path.server.dist, done

    emulateAndroid : (done) -> sequence 'emulate-android', done
    emulateIOS     : (done) -> sequence 'emulate-ios',     done
    runAndroid     : (done) -> sequence 'run-android',     done
    runIOS         : (done) -> sequence 'run-ios',         done
    buildAndroid   : (done) -> sequence 'build-android',   done
    buildIOS       : (done) -> sequence 'build-ios',       done

exports.registers = registers
