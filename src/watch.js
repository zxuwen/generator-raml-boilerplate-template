#!/usr/bin/env node

/**
 * Watches raml file and reloads documentation
 */

var watch = require('watch');
var docs = require('./doc');

watch.watchTree('./raml', function (f, curr, prev) {
  docs.generate();
  console.log('index.raml Changed!');
  if (typeof f == "object" && prev === null && curr === null) {
    // Finished walking the tree
  } else if (prev === null) {
    // f is a new file
  } else if (curr.nlink === 0) {
    // f was removed
  } else {
    // f was changed
  }
});
