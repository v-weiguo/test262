// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype source property does not have a set accessor
es5id: 15.10.7.1_A10
description: Checking if varying the source property fails
flags: [noStrict]
includes: [$FAIL.js]
---*/

__re = RegExp.prototype;

//CHECK#1
if (__re.hasOwnProperty('source') !== true) {
  $FAIL('#1: __re = RegExp.prototype; __re.hasOwnProperty(\'source\') === true');
}

__sample = /./;
__obj = __sample.source;

__sample.source = "shifted";

//CHECK#2
if (__sample.source !== __obj) {
  $ERROR('#2: __sample = /./; __obj = __sample.source; __sample.source = "shifted"; __sample.source === __obj. Actual: ' + (__sample.source));
}
