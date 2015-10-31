'use strict';

var five = require('johnny-five');
var board = new five.Board();
var pumpPin = 5;
var pump;
var pumpOnTime = 1000;
var pumpCycleTime = 5000;

function pulsePumpHigh() {
  /* jshint validthis:true */
  pump.high();
  board.wait(pumpOnTime, pump.low.bind(pump));
}

board.on('ready', function () {
  // initialize the pump
  pump = new five.Pin(pumpPin);
  console.log('pump intialized');

  // Every cycle time ms, turn the pump on, then turn if off again
  // pumpOnTime ms later
  this.loop(pumpCycleTime, pulsePumpHigh);
});
