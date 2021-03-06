// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getMinutes property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
es5id: 15.9.5.20_A3_T1
description: Checking ReadOnly attribute
flags: [noStrict]
---*/

x = Date.prototype.getMinutes.length;
Date.prototype.getMinutes.length = 1;
if (Date.prototype.getMinutes.length !== x) {
  $ERROR('#1: The Date.prototype.getMinutes.length has the attribute ReadOnly');
}
