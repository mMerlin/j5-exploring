'use strict';
var five = require('johnny-five');
var myBoard = new five.Board();
var cfg = {
  id: 'Digital test',
  pin: '2',
  freq: 1000
};
function readCallback(val, more) {
  /* jshint validthis:true */
  console.log('read callback with:', val, more, this.id, this.value);
}
function doRead(cb) {
  /* jshint validthis: true */
  // cb.call(this, null, this.value);
  cb.call(this, 'fake', this.value);
}
five.Pin.read2 = function (pin, callback) {
  pin.board.loop(pin.freq, doRead.bind(pin, callback));
};
myBoard.on('ready', function () {
  /* jshint validthis: true */
  var tst = new five.Pin(cfg);
  five.Pin.read(tst, readCallback);
  five.Pin.read2(tst, readCallback);
});
