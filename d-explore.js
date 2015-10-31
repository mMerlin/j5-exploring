'use strict';
var five = require('johnny-five');
var myBoard = new five.Board();
var cfg = {
  id: 'Digital test',
  pin: 8,
  type: 'digital',
  mode: five.Pin.INPUT,
  range: [0, 1],
  freq: 1000
};

function dataCallback(err, val) {
  /* jshint validthis:true */
  console.log('data for:', this.id, 'with value:', this.value,
    'and arguments', err, val);
}

function boardIsReady() {
  var value, tst = new five.Sensor(cfg);
  // tst.io.digitalRead(tst.pin, function(data) {
  //   value = data;
  //   console.log('digitalRead for', this.id, data);
  // })
  console.log("Input mode:", five.Pin.INPUT);
  value = {
    id: tst.id,
    mode: tst.mode,
    freq: tst.freq,
    range: tst.range,
    limit: tst.limit,
    threshold: tst.threshold,
    isScaled: tst.isScaled,
    pin: tst.pin,
  };
  console.log(value);
  tst.on('data', dataCallback);
}

myBoard.on('ready', boardIsReady);
