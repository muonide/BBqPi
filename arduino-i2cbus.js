'use strict';

var async = require('async'),
  i2c = require('../'),
  i2c1;

var ARDUINO_ADDR = 0x08,


(function () {
  async.series([
    function (cb) {
      i2c1 = i2c.open(1, cb);
    },
    function (cb) {
      // Wait while non volatile memory busy
      (function read() {
        i2c1.readByte(ARDUINO_ADDR, function (err, config) {
          if (err) return cb(err);
          console.log(config);
          cb(null);
        });
      }());
    },
    function (cb) {
      i2c1.close(cb);
    }
  ], function (err) {
    if (err) throw err;
  });
}());