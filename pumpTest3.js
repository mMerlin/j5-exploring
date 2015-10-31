'use strict';

var five = require('johnny-five');
var board = new five.Board();
var pumpPin = 5;

function pulsePinHigh(highTime) {
  /* jshint validthis:true */
  this.high();
  this.board.wait(highTime, this.low.bind(this));
}

board.on('ready', function () {
  // initialize the pump
  var pump = new five.Pin(pumpPin);
  console.log('pump intialized');

  // Every 6 seconds, turn the pump on for 2 seconds
  // this.loop(6000, pulsePinHigh.bind(pump, 2000));
  // or to match what your delay was trying to do:
  // Every 20 seconds, turn the pump on for 10 seconds
  this.loop(20000, pulsePinHigh.bind(pump, 10000));
});
