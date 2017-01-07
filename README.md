[![Build Status](https://travis-ci.org/Merukeru/angular1-gulp-template1.svg?branch=master)](https://travis-ci.org/Merukeru/angular1-gulp-template1)

# AngularJS Template

Template for AngularJS projects using Yarn, Gulp, Karma, Jasmine and Browsersync as toolchain.

## Setup

Checkout this repo. 

`yarn global add gulp-cli` (or `npm install --global gulp-cli`)

`yarn add browser-sync gulp --dev` (or `npm install browser-sync gulp --save-dev`)

`yarn add jasmine karma --dev` (or `npm install jasmine karma --save-dev`)

Run `yarn` (or `npm install`)

## Build & development

### Default gulp task

Run `gulp` for building and `gulp serve` for preview.

The command `gulp` is the default gulp task and will build the project production ready (including building target files, run tests and pack the project in a .tar.gz file)

### Gulp task: gulp serve

The command `gulp serve` will build the project and start a live server with a live reload.

The command `gulp serve:prod` builds the project production ready and serves the result with a web server.

## Testing

Running `gulp test` will run the unit tests using karma and jasmine.

## License

MIT (see LICENSE.md)

(c) by 2017 by Merukeru
