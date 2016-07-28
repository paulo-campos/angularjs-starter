project = require('./project').project
#====================

paths =
    root_folder    : './'
    package_file   : 'package.json'
    bower_file     : 'bower.json'
    compass_file   : 'config.rb'
    readme_file    : 'README.md'
    index_file     : 'index.html'
    doc_folder     : 'doc/'
    doc_files      : 'doc/**/*'
    dev_folder     : 'dev/'
    dist_folder    : 'dist/'
    htaccess_file  : 'dev/.htaccess'
    app_files      : 'dev/app/**/*'
    js_files       : 'dev/app/**/*.js'
    js_folder      : 'dev/app/'
    html_files     : 'dev/app/**/*.html'
    scss_folder    : 'dev/scss/'
    scss_files     : 'dev/scss/**/*.scss'
    assets_files   : 'dev/assets/**/*'
    images_files   : 'dev/assets/images/**/*'
    figures_folder : 'dev/assets/images/app/'
    css_folder     : 'dev/assets/stylesheets/'
    css_files      : 'dev/assets/stylesheets/**/*'
    fonts_files    : 'dev/assets/fonts/'
    app_folder     : 'dist/app/'
    assets_folder  : 'dist/assets/'
    images_folder  : 'dist/assets/images/'
    server        :
        dev  :
            server :
                baseDir: [ './', 'dev/' ]
            port   : 3000
        doc  :
            server : 'doc/'
            port   : 4000
        dist :
            server : 'dist/'
            port   : 5000
    deploy        :
        dev  : 'http://localhost:3000/'
        dist : 'http://localhost:5000/'
        prod : project.new.url

exports.paths = paths
