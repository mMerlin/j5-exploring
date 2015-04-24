'use strict';
var five = require('johnny-five');
var myBoard = new five.Board();
var cfg = {
  id: 'Digital test',
  pin: '4',
  type: 'digital',
  range: [0, 1],
  mode: five.Pin.INPUT,
  freq: 1000
};

function readCallback1(val) {
  console.log('read callback 1 with:', val);
}
function readCallback2(val) {
  console.log('read callback 2 with:', val);
}
function dataCallback() {
  /* jshint validthis:true */
  console.log('data callback for:', this.id, this.value);
}

function boardIsReady() {
  var tst = new five.Pin(cfg);
  tst.on('data', dataCallback);
  tst.io.digitalRead(tst.pin, readCallback1);
  five.Pin.read(tst, readCallback2);
}

myBoard.on('ready', boardIsReady);
