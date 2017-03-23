# AngularJS Starter

> A better way to start developing web applications

[![Build Status](https://travis-ci.org/paulo-campos/angularjs-starter.svg?branch=master)](https://travis-ci.org/paulo-campos/angularjs-starter) [![devDependencies Status](https://david-dm.org/paulo-campos/angularjs-starter/dev-status.svg)](https://david-dm.org/paulo-campos/angularjs-starter?type=dev) [![dependencies Status](https://david-dm.org/paulo-campos/angularjs-starter/status.svg)](https://david-dm.org/paulo-campos/angularjs-starter)

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

### Structure

    ├── README.md          - Documentation of project  
    ├── package.json       - Environment dependencies management by NPM  
    ├── gulpfile.js        - Main file for build tasks  
    ├── .gitignore         - Tracker skipped files  
    ├── .travis.yml        - Definitions for environment  
    ├── .editorconfig      - Definitions for syntax code  
    ├── node_modules/      - Dependencies packages for development  
    ├── gulp/              - Build tasks configuration  
    ├── dev/               - Development application  
    │   ├── .htaccess      - Definitions for server entry point  
    |   ├── index.html     - Main application entry point  
    |   ├── templates.js   - Cache for views  
    │   ├── recourses/     - Resources files  
    │   ├── assets/        - Accessories files  
    │   ├── app/           - Custom AngularJS and stylesheets  
    ├── .sass-cache/       - Cached by Compass  
    ├── doc/               - Javascript documentation  
    ├── dist/              - Distribution application

### Workflow

You can use any of the following commands:

| Commands                 | Result                                             |
|--------------------------|:--------------------------------------------------:|
| `$ npm run compile:dev`  | Compilation of the files for development           |
| `$ npm run compile:dist` | Compilation of the files for distribuition         |
| `$ npm run serve:dev`    | Watch the development in browser with livereload   |
| `$ npm run serve:doc`    | Watch the documentation in browser with livereload |
| `$ npm run serve:dist`   | Shows the distribuition in browser                 |
| `$ npm run compile:prod` | Compilation of the files for production            |

### License

[MIT License](http://opensource.org/licenses/mit-license.php)

### Be historic!

![alt tag](https://media.giphy.com/media/V9Ty8DdWJtkWY/giphy.gif)
