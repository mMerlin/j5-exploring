'use strict';
var five = require('johnny-five');
var myBoard = new five.Board();

function boardIsReady() {
  var tst = new five.Pin(19);
  console.log(tst);
}

myBoard.on('ready', boardIsReady);
