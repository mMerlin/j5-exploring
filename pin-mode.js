'use strict';

var five = require('johnny-five');
var myBoard = new five.Board();

function boardIsReady() {
  var tst, p = {};
  console.log('\nTest five.Pin(?)');

  tst = 2;
  p.p2 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p2.mode);

  tst = { pin: 4, mode: 0 };
  p.p4 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p4.mode);

  tst = { pin: 7, mode: 1 };
  p.p7 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p7.mode);

  tst = { pin: 14, mode: 2 };
  p.p14 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p14.mode);

  tst = { pin: 3, mode: 3 };
  p.p3 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p3.mode);

  tst = { pin: 5, mode: 4 };
  p.p5 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p5.mode);

  tst = { pin: 15, mode: 0 };
  p.p15 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p15.mode);

  tst = { pin: 16, mode: 1 };
  p.p16 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p16.mode);

  tst = { pin: 17, mode: 2 };
  p.p17 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p17.mode);

  tst = { pin: 18, mode: 3 };
  p.p18 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p18.mode);

  tst = { pin: 19, mode: 4 };
  p.p19 = new five.Pin(tst);
  console.log(JSON.stringify(tst), '==> mode:', p.p19.mode);


  process.exit();
}

myBoard.on('ready', boardIsReady);
