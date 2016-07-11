# AngularJS Starter

> A better way to start developing web applications

[![Build Status](https://travis-ci.org/paulovitorwd/angularjs-starter.svg?branch=master)](https://travis-ci.org/paulovitorwd/angularjs-starter) [![devDependency Status](https://david-dm.org/paulovitorwd/angularjs-starter/dev-status.svg)](https://david-dm.org/paulovitorwd/angularjs-starter#info=devDependencies)

This project aims to streamline starting an application in AngularJS

### Features

###### Added modules
- [angular-ui-router](http://ngcordova.com/)
- [angular-off-click](http://ngmodules.org/modules/angular-off-click)
- [angular-socialshare](https://github.com/720kb/angular-socialshare)
- [angulartics-google-analytics](https://github.com/angulartics/angulartics-google-analytics)

###### Added for development
- Management of packages for development with [NPM](https://www.npmjs.com/)
- Management of libs for the project with [Bower](https://bower.io/)
- Configuration builds with [Gulp](http://gulpjs.com/) using [Coffee Script](http://coffeescript.org/)
- CSS compilation with [SASS](http://sass-lang.com/) using [Compass](http://compass-style.org/)
- Images optimization with [Imagemin](https://www.npmjs.com/package/gulp-image-optimization)
- Checking javascript with [JSHint](http://jshint.com/)
- Generate javascript documentation with [JSDoc](http://usejsdoc.org/)
- Livereload with [Browser Sync](https://www.browsersync.io/)
- Good practice with [Angular style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

### Dependencies

There are dependencies required for this project in AngularJS, then to install them or update them, with [NodeJS and your NPM](https://nodejs.org/en/) and [Ruby](http://rubyinstaller.org/)(for Windows) already installed, run the commands:

    npm install -g gulp bower coffee-script
    gem install sass compass

### Installation

For the install all dependencies, run the command:

    npm install

This will:  
- Install the NPM packages
- Install the Bower packages
- Show the Gulp tasks

### Structure

    ├── README.md       - Documentation of project
    ├── package.json    - Environment dependencies management by NPM  
    ├── gulpfile.js     - Initiation of builds  
    ├── bower.json      - Application dependencies management by Bower  
    ├── .gitignore      - Tracking skipped files  
    ├── .travis.yml     - Configuration for Environment  
    ├── .editorconfig   - Configuration for general syntaxe  
    ├── .bowerrc        - Configuration for Bower  
    ├── .jshintrc       - Configuration for JSHint  
    ├── config.rb       - Configuration for Compass  
    ├── node_modules/   - Development packages  
    ├── gulp/           - Configuration of all Gulp tasks  
    ├── dev/  
    │   ├── index.html  - Main Ionic app entry point  
    │   ├── libs/       - Libraries managed by Bower  
    │   ├── app/        - Custom AngularJS  
    │   ├── scss/       - SCSS Modularized  
    │   ├── assets/     - Acessories files  
    ├── .sass-cache/    - Cached by Compass  
    ├── out/            - Javascript documentation  
    ├── dist/           - Application for distribuition

### Workflow

Before everthing, fill the data object **project.new** in **gulp/settings/project.coffee** file and run the command:

    $ gulp config:start

This will set all settings to your project needs, after you can use any of the following commands:

| Commands               | Result                                             |
| ---------------------- |:--------------------------------------------------:|
|`$ gulp compile:dev`    | Compilation of the files for development           |
|`$ gulp compile:dist`   | Compilation of the files for distribuition         |
|`$ gulp watch:dev`      | Watch the development in browser with livereload   |
|`$ gulp watch:doc`      | Watch the documentation in browser with livereload |
|`$ gulp watch:dist`     | Shows the distribuition in browser                 |

### License

[MIT License](http://opensource.org/licenses/mit-license.php)

### Be historic!

![alt tag](https://media.giphy.com/media/V9Ty8DdWJtkWY/giphy.gif)
