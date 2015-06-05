// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: test Object.Assign(target,...sources),only one argument was passed,
             return ToObject(target)
es6id:  19.1.2.1.3
includes: [assert.js]
---*/

var target = "a";
var result = Object.assign(target);

assert.sameValue(result.valueOf(), "a", "Should return 'a',but \'"+ result.valueOf() + "\' instead.");