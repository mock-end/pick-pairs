'use strict';

var isObject = require('is-object');
var pickKeys = require('pick-keys');


module.exports = function (object, count) {

  var keys = [];

  if (object && isObject(object)) {
    keys = pickKeys(object, count);
  }

  var result = {};

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];

    result[key] = object[key];
  }

  return result;
};
