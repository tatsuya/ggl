'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs');

/**
 * Simple JSON file storage.
 *
 * @param {String} path - file path
 */
function Storage(path) {
  this.path = path;
}

/**
 * Contert JSON text to object.
 *
 * @return {Object}
 * @api public
 */
Storage.prototype.read = function() {
  var data = {};
  try {
    var json = fs.readFileSync(this.path, 'utf8');
    data = JSON.parse(json);
  } catch(e) {}
  return data;
};

/**
 * Convert object to JSON text and save it to the file storage.
 *
 * @param  {Object} data
 * @api public
 */
Storage.prototype.write = function(data) {
  var json = JSON.stringify(data);
  fs.writeFileSync(this.path, json, 'utf8');
}

module.exports = Storage;
