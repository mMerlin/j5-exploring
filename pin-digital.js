'use strict';

var five = require('johnny-five');
var myBoard = new five.Board();

/***
 * Report information about a Pin object instance
 *
 * @param {object} arg    number, string, or opts object
 * @param {object} pin    Pin instance
 * @return {undefined}
 */
function reportPinInfo(arg, pin) {
  // console.log('full:', pin);//debug
  console.log('\nconstructor parameter:', arg);
  // console.log('Pin information');
  console.log('id:', pin.id);
  console.log('pin:', pin.pin);
  console.log('addr:', pin.addr);
  console.log('mode:', pin.mode);
  console.log('type:', pin.type);
  console.log('value:', pin.value);
}
/**
 * The code for the project, that will be run when the board is ready
 *
 * This is a 'callback' function that will be run by johnny-five after it has
 * finished all the behind the scenes setup.
 *
 * johnny-five makes the board that this is a callback for available in the
 * 'this' parameter / variable.  All methods / properties of the specific
 * board are available as properties of 'this'.
 */
function boardIsReady() {
  /* jshint validthis:true */
  var p = {};
  // console.log('\nTest Pin.isPrefixed(?, ["I", "A"])');
  // p.tst = 'aa';
  // console.log('"' + p.tst + '":', five.Pin.isPrefixed(p.tst, ["I", "A"]));
  // p.tst = 'a0';
  // console.log('"' + p.tst + '":', five.Pin.isPrefixed(p.tst, ["I", "A"]));
  // p.tst = 'AA';
  // console.log('"' + p.tst + '":', five.Pin.isPrefixed(p.tst, ["I", "A"]));
  // p.tst = 'I0';
  // console.log('"' + p.tst + '":', five.Pin.isPrefixed(p.tst, ["I", "A"]));
  //
  // console.log('\nTest Pin.isAnalog(?)');
  // p.tst = 'A0';
  // console.log('"' + p.tst + '":', five.Pin.isAnalog(p.tst));
  // p.tst = '5';
  // console.log('"' + p.tst + '":', five.Pin.isAnalog(p.tst));
  // p.tst = 5;
  // console.log(p.tst +':', five.Pin.isAnalog(p.tst));
  // p.tst = { id: 'myPin'};
  // console.log(JSON.stringify(p.tst) + '":', five.Pin.isAnalog(p.tst));
  // p.tst = { pin: 'A0'};
  // console.log(JSON.stringify(p.tst) + '":', five.Pin.isAnalog(p.tst));
  // p.tst = { pin: 5};
  // console.log(JSON.stringify(p.tst) + '":', five.Pin.isAnalog(p.tst));
  // p.tst = { addr: 'A0'};
  // console.log(JSON.stringify(p.tst) + '":', five.Pin.isAnalog(p.tst));
  // p.tst = { addr: 5};
  // console.log(JSON.stringify(p.tst) + '":', five.Pin.isAnalog(p.tst));

  console.log('\nTest Board.Options(?)');
  p.tst = 5;
  console.log(JSON.stringify(p.tst) + ':', five.Board.Options(p.tst));
  p.tst = 'A5';
  console.log(JSON.stringify(p.tst) + ':', five.Board.Options(p.tst));
  p.tst = { addr: 5};
  console.log(JSON.stringify(p.tst) + ':', five.Board.Options(p.tst));
  p.tst = { pin: 5};
  console.log(JSON.stringify(p.tst) + ':', five.Board.Options(p.tst));
  p.tst = { addr: 'A0'};
  console.log(JSON.stringify(p.tst) + ':', five.Board.Options(p.tst));
  p.tst = { pin: 'A0'};
  console.log(JSON.stringify(p.tst) + ':', five.Board.Options(p.tst));
  p.tst = { pin: 'A0', type: 'digital', mode: 0};
  console.log(JSON.stringify(p.tst) + ':', five.Board.Options(p.tst));

  console.log('\nTest five.Pin(?)');
  p.tst = 4;
  p.p4 = new five.Pin(p.tst);
  reportPinInfo(p.tst, p.p4);
  p.tst = { pin: 7, mode: 0 };
  p.p7 = new five.Pin(p.tst);
  reportPinInfo(p.tst, p.p4);
  p.tst = { pin: 3, type: 'digital', mode: 3 };
  p.p3 = new five.Pin(p.tst);
  reportPinInfo(p.tst, p.p3);
  p.tst = { pin: 9, type: 'digital', mode: 4 };
  p.p9 = new five.Pin(p.tst);
  reportPinInfo(p.tst, p.p9);
  // p.tst = 14;
  p.tst = { pin: 14, mode: 2 };
  p.p14 = new five.Pin(p.tst);
  reportPinInfo(p.tst, p.p14);
  p.tst = 'A2';
  p.p4 = new five.Pin(p.tst);
  reportPinInfo(p.tst, p.p4);

  process.exit();
}

myBoard.on('ready', boardIsReady);
