'use strict';
var five = require('johnny-five');
var myBoard = new five.Board();
var cfg = {
  id: 'Digital test',
  pin: 8,
  type: 'digital',
  range: [0, 1],
  freq: 1000
};

function dataCallback(err, val, more) {
  /* jshint validthis:true */
  console.log('data for:', this.id, 'with value:', this.value,
    'and arguments', err, val, more
    );
}

function boardIsReady() {
  /* jshint validthis:true */
  var tst = new five.Sensor(cfg);
  // this.pinMode(cfg.pin, five.Pin.INPUT);
  tst.on('data', dataCallback);
}

myBoard.on('ready', boardIsReady);
