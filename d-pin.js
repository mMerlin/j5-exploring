'use strict';
var five = require('johnny-five');
var myBoard = new five.Board();
var cfg = {
  id: 'Digital test',
  pin: 19,
  type: 'digital',
  range: [0, 1],
  mode: five.Pin.INPUT,
  freq: 1000
};

function readCallback1(val, more) {
  /* jshint validthis:true */
  console.log('read callback 1 with:', val, more, this.id, this.value);
}
function readCallback2(val, more) {
  /* jshint validthis:true */
  console.log('read callback 2 with:', val, more, this.id, this.value);
}
function dataCallback(arg) {
  /* jshint validthis:true */
  console.log('data callback for:', this.id, this.value, arg);
}

function boardIsReady() {
  /* jshint validthis:true */
  var tst = new five.Pin(cfg);
  tst.query(function (state) { console.log(state); });
  // this.pinMode(cfg.pin, five.Pin.INPUT);
  tst.on('data', dataCallback);
  tst.io.digitalRead(tst.pin, readCallback1);
  five.Pin.read(tst, readCallback2);
}

myBoard.on('ready', boardIsReady);
