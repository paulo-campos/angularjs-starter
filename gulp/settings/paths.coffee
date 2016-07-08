paths =
    root_folder   : './'
    package_file  : 'package.json'
    bower_file    : 'bower.json'
    compass_file  : 'config.rb'
    readme_file   : 'README.md'
    index_file    : 'index.html'
    doc_folder    : 'out/'
    doc_files     : 'out/**/*'
    dev_folder    : 'dev/'
    dist_folder   : 'dist/'
    htaccess_file : 'dev/.htaccess'
    js_files      : 'dev/app/**/*.js'
    js_folder     : 'dev/app/'
    scss_folder   : 'dev/scss/'
    scss_files    : 'dev/scss/**/*.scss'
    assets_files  : 'dev/assets/**/*'
    css_folder    : 'dev/assets/stylesheets/'
    css_files     : 'dev/assets/stylesheets/**/*'
    app_files     : 'dev/app/**/*'
    html_files    : 'dev/app/**/*.html'
    assets_folder : 'dist/assets/'
    app_folder    : 'dist/app/'
    server :
        dev:
            server : 'dev/',
            port   : 3000
        doc:
            server : 'out/',
            port   : 4000
        dist:
            server : 'dist/',
            port   : 5000
    deploy :
        dev:  'http://localhost:3000/'
        dist: 'http://localhost:5000/'
        prod: 'http://paulofrontend.com.br/' # {string} Enter with the url site of production

exports.paths = paths
