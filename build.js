var browserify = require('browserify');
var fs = require('fs');
browserify('test/index.js')
  .transform(require('browserify-css'), {
    rootDir: './test',
    //minify: true,
    onFlush: function(options, done) {
      done('module.exports = ' + JSON.stringify(options.data) + ';');
    }
  })
  .bundle().pipe(process.stdout);
