'use strict';
var five = require('johnny-five');

new five.Board().on('ready', function () {
  var tst = new five.Pin();
  console.log('defaults:', tst.pin, tst.addr);
});
