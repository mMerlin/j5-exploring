'use strict';
var five = require('johnny-five');
var myBoard = new five.Board();
var cfg = {
  id: 'Digital test',
  pin: 8,
  type: 'digital',
  mode: 0,
  range: [0, 1],
  freq: 1000
};

function dataCallback(err, val) {
  /* jshint validthis:true */
  console.log('data for:', this.id, 'with value:', this.value,
    'and arguments', err, val);
}

function boardIsReady() {
  var tst = new five.Sensor(cfg);
  tst.on('data', dataCallback);
}

myBoard.on('ready', boardIsReady);
