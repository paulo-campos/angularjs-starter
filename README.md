# AngularJS Starter

> A better way to start developing web applications

[![Build Status](https://travis-ci.org/paulo-campos/angularjs-starter.svg?branch=master)](https://travis-ci.org/paulo-campos/angularjs-starter) [![devDependencies Status](https://david-dm.org/paulo-campos/angularjs-starter/dev-status.svg)](https://david-dm.org/paulo-campos/angularjs-starter?type=dev)

This project aims to streamline starting an application in AngularJS

### Features

###### Added modules
- [angular-ui-router](http://ngcordova.com/)
- [angular-off-click](http://ngmodules.org/modules/angular-off-click)
- [angulartics-google-analytics](https://github.com/angulartics/angulartics-google-analytics)

###### Added for development
- Management of packages for development with [NPM](https://www.npmjs.com/)
- Configuration builds with [Gulp](http://gulpjs.com/)
- CSS compilation with [SASS](http://sass-lang.com/) using [Compass](http://compass-style.org/)
- Javascript compilation with [Uglify](https://www.npmjs.com/package/gulp-uglify)
- Generate javascript documentation with [JSDoc](http://usejsdoc.org/)
- Livereload with [Browser Sync](https://www.browsersync.io/)
- Good practice with [Angular style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

### Dependencies

There are dependencies required for this project in AngularJS, then to install them or update them, with [NodeJS and your NPM](https://nodejs.org/en/) and [Ruby](http://rubyinstaller.org/)(for Windows) already installed, run the commands:

    npm install -g gulp
    gem install sass compass

### Installation

For the install all dependencies, run the command:

    npm install

This will:  
- Install the NPM packages

### Structure

    ├── README.md          - Documentation of project  
    ├── package.json       - Environment dependencies management by NPM  
    ├── gulpfile.js        - Initiation of tasks  
    ├── .gitignore         - Tracker skipped files  
    ├── .travis.yml        - Definitions for environment  
    ├── .editorconfig      - Definitions for general syntax code  
    ├── node_modules/      - Development packages  
    ├── gulp/              - Tasks configuration
    ├── dev/               - Application for development  
    │   ├── .htaccess      - Definitions for server entry point  
    |   ├── index.html     - Main application entry point  
    |   ├── templates.js   - Cache for views  
    │   ├── app/           - Custom AngularJS  
    │   ├── scss/          - SCSS modularized  
    │   ├── assets/        - Accessories files  
    │   ├── recourses/     - Resources files  
    ├── .sass-cache/       - Cached by Compass  
    ├── doc/               - Javascript documentation  
    ├── dist/              - Application for distribuition

### Workflow

You can use any of the following commands:

| Commands             | Result                                             |
| -------------------- |:--------------------------------------------------:|
|`$ gulp compile:dev`  | Compilation of the files for development           |
|`$ gulp compile:dist` | Compilation of the files for distribuition         |
|`$ gulp compile:prod` | Compilation of the files for production            |
|`$ gulp serve:dev`    | Watch the development in browser with livereload   |
|`$ gulp serve:doc`    | Watch the documentation in browser with livereload |
|`$ gulp serve:dist`   | Shows the distribuition in browser                 |

### License

[MIT License](http://opensource.org/licenses/mit-license.php)

### Be historic!

![alt tag](https://media.giphy.com/media/V9Ty8DdWJtkWY/giphy.gif)
