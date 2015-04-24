**Pin**
Class (device? component?)
johnny-five@0.8.58
/johnny-five/lib/pin.js
https://github.com/rwaldron/johnny-five/wiki/Pin

The Pin constructor function takes a single argument that can be:
* an instance of a Pin
* an integer pin number
* a string pin number identifier (ie: 'A0')
* an options object with properties to initialize the new Pin instance

The documented options object shows properties for id, pin, type.  The code
pin.js:31,39,86 also references properties for addr and mode

*pin.js:46* Is it possible for opts to ever NOT be an object at this point?
After pin.js:35-37, it appears that opts will aways be an object, returned by
Board.Options.  At least for anything close to a valid opts value passed to the
Pin constructor function.

*pin.js:86* What is 'this.as' supposed to be for/from?  I can not find any
(other) reference to it, so it would appear to always be undefined.

Duemilanove PWM pins: 3,5,6,9,10,11

*Pin.isAnalog* returns true or undefined: never false
opts is the Pin constructor argument; return true if one of opts, opts.addr,
opts.pin is a string with the first character being either "I" or "A".  opts.pin
is only checked if opts.addr is undefined

*Pin.isPrefixed(value, prefixes)* returns boolean; true if the first character
of (assumed string) value matches one of the entries in (assumed array)
prefixes.  Prefixes *must* at least be an object with a reduce property function.

context: johnny-five@0.8.58
$ uname -srvpio
Linux 3.19.3-200.fc21.x86_64 #1 SMP Thu Mar 26 21:39:42 UTC 2015 x86_64 x86_64 GNU/Linux
$ node --version
v0.10.38

The Pin() constructor is not honoring requests to create a Pin with mode 0.  The
problem is pin.js:86
```javascript
this.mode = this.as || opts.mode || (isAnalogInput ? 0x00 : 0x01);
```
Back at pin.js:32
```javascript
var isAnalogInput = Pin.isAnalog(opts);
```
sets isAnalogInput to true, only for an analog pin number (prefix "A" or "I").
Everything else is javascript 'false', so the right end of that logical
expression is always 0x01.  When opts.mode === 0, that is 'falsey' again, so
this.mode gets set to 1.

Dropping the apparently always undefined (and 'falsey') this.as, I think the
correct line should be
```javascript
this.mode = typeof opts.mode === 'undefined' ? (isAnalogInput ? 0x00 : 0x01) : opts.mode;
```
Or using the defined constants
```javascript
this.mode = typeof opts.mode === 'undefined' ?
  (isAnalogInput ? Pin.INPUT : Pin.OUTPUT) : opts.mode;
```

Test Code
```Javascript
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
```

Output Before changing pin.js
```
Test five.Pin(?)
2 ==> mode: 1
{"pin":4,"mode":0} ==> mode: 1
{"pin":7,"mode":1} ==> mode: 1
{"pin":14,"mode":2} ==> mode: 2
{"pin":3,"mode":3} ==> mode: 3
{"pin":5,"mode":4} ==> mode: 4
{"pin":15,"mode":0} ==> mode: 1
{"pin":16,"mode":1} ==> mode: 1
{"pin":17,"mode":2} ==> mode: 2
{"pin":18,"mode":3} ==> mode: 3
{"pin":19,"mode":4} ==> mode: 4
```
Output After
```
Test five.Pin(?)
2 ==> mode: 1
{"pin":4,"mode":0} ==> mode: 0
{"pin":7,"mode":1} ==> mode: 1
{"pin":14,"mode":2} ==> mode: 2
{"pin":3,"mode":3} ==> mode: 3
{"pin":5,"mode":4} ==> mode: 4
{"pin":15,"mode":0} ==> mode: 0
{"pin":16,"mode":1} ==> mode: 1
{"pin":17,"mode":2} ==> mode: 2
{"pin":18,"mode":3} ==> mode: 3
{"pin":19,"mode":4} ==> mode: 4
```
