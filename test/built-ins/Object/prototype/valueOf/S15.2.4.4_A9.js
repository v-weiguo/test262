// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Object.prototype.valueOf.length property does not have the attribute
    DontDelete
es5id: 15.2.4.4_A9
description: >
    Checknig if deleting of the Object.prototype.valueOf.length
    property fails
includes: [$FAIL.js]
---*/

//CHECK#0
if (!(Object.prototype.valueOf.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.valueOf has length property');
}

//CHECK#1
if (!delete Object.prototype.valueOf.length) {
  $ERROR('#1: The Object.prototype.valueOf.length property does not have the attributes DontDelete');
}

//CHECK#2
if (Object.prototype.valueOf.hasOwnProperty('length')) {
  $FAIL('#2: The Object.prototype.valueOf.length property does not have the attributes DontDelete');
}
