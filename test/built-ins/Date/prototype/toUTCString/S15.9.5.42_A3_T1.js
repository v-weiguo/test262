// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.toUTCString property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
es5id: 15.9.5.42_A3_T1
description: Checking ReadOnly attribute
flags: [noStrict]
---*/

x = Date.prototype.toUTCString.length;
Date.prototype.toUTCString.length = 1;
if (Date.prototype.toUTCString.length !== x) {
  $ERROR('#1: The Date.prototype.toUTCString.length has the attribute ReadOnly');
}
