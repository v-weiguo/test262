// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getDay property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
es5id: 15.9.5.16_A3_T1
description: Checking ReadOnly attribute
flags: [noStrict]
---*/

x = Date.prototype.getDay.length;
Date.prototype.getDay.length = 1;
if (Date.prototype.getDay.length !== x) {
  $ERROR('#1: The Date.prototype.getDay.length has the attribute ReadOnly');
}
