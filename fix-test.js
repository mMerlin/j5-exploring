'use strict';
var five = require("johnny-five");
var myBoard = new five.Board();

myBoard.on("ready", function() {
  var tst = new five.Sensor({
    pin: 8,
    type: "digital"
  });

  tst.on("data", function() {
    console.log(this.value);
  });
});
