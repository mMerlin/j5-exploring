'use strict';
var five = require('johnny-five');
var myBoard = new five.Board();
var period = 1000;
var aCfg = {
  id: 'Analog test',
  pin: 'A5',
  type: 'analog',
  range: [0, 1023],
  freq: period
};
var dCfg = {
  id: 'Digital test',
  pin: 8,
  type: 'digital',
  range: [0, 1],
  freq: period
};

function dataCallback(err, val, more) {
  /* jshint validthis:true */
  console.log('data for:', this.id, 'with value:', this.value,
    'and arguments', err, val, more
    );
}

function boardIsReady() {
  /* jshint validthis: true */
  var a, d;
  a = new five.Sensor(aCfg);
  d = new five.Sensor(dCfg);
  a.on('data', dataCallback);
  d.on('data', dataCallback);
}

myBoard.on('ready', boardIsReady);
