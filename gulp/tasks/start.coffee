gulp    = require 'gulp'
replace = require 'gulp-replace'

start = require('./../settings/start.coffee').start
path  = require('./../settings/paths.coffee').paths
sync  = require('./../settings/sync.coffee').sync
#====================

gulp.task 'start', ->
    count   = 0
    newData = Object.getOwnPropertyNames path.new_project

    for data in newData
        do (data) -> count++ if path.new_project[data] is '' or typeof path.new_project[data] isnt 'string'

    if count
        console.log '==========================================='
        console.log '|                                         |'
        console.log '|    Please, fill all data of the new     |'
        console.log '|    project before running this task!    |'
        console.log '|                                         |'
        console.log '==========================================='
    else
        gulp.src [ package_file, bower_file ]
            .pipe replace starter_project.name,        new_project.name
            .pipe replace starter_project.version,     new_project.version
            .pipe replace starter_project.description, new_project.description
            .pipe replace starter_project.author,      new_project.author
            .pipe replace starter_project.email,       new_project.email
            .pipe gulp.dest root_folder

        gulp.src dev_folder + index_file
            .pipe replace starter_project.name,        new_project.name
            .pipe replace starter_project.version,     new_project.version
            .pipe replace starter_project.description, new_project.description
            .pipe replace starter_project.title,       new_project.title
            .pipe replace starter_project.keywords,    new_project.keywords
            .pipe replace starter_project.author,      new_project.author
            .pipe replace starter_project.email,       new_project.email
            .pipe gulp.dest dev_folder

        gulp.src js_files
            .pipe replace starter_project.name, new_project.name
            .pipe gulp.dest js_folder
