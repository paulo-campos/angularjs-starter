project = require('./project').project
#====================

paths =
    root_folder   : './'
    readme_file   : 'README.md'
    package_file  : 'package.json'
    bower_file    : 'bower.json'
    index_file    : 'index.html'
    dev_folder    : 'dev/'
    dist_folder   : 'dist/'
    htaccess_file : 'dev/.htaccess'
    app_files     : 'dev/app/**/*'
    js_files      : 'dev/app/**/*.js'
    js_folder     : 'dev/app/'
    html_files    : 'dev/app/**/*.html'
    scss_folder   : 'dev/scss/'
    scss_files    : 'dev/scss/**/*.scss'
    assets_files  : 'dev/assets/**/*'
    images_local  : 'dev/assets/images/app'
    images_files  : 'dev/assets/images/**/*'
    css_folder    : 'dev/assets/stylesheets/'
    css_files     : 'dev/assets/stylesheets/**/*'
    fonts_local   : 'dev/assets/fonts'
    app_folder    : 'dist/app/'
    assets_folder : 'dist/assets/'
    images_folder : 'dist/assets/images/'
    doc_folder    : 'doc/'
    doc_files     : 'doc/**/*'
    server        :
        dev  :
            server :
                baseDir : 'dev/'
                routes  :
                    '/bower_components' : 'bower_components'
            port   : 3000
        doc  :
            server : 'doc/'
            port   : 4000
        dist :
            server : 'dist/'
            port   : 5000
    deploy        :
        dev  : 'localhost:3000/'
        dist : 'localhost:5000/'
        prod : project.new.url

exports.paths = paths
