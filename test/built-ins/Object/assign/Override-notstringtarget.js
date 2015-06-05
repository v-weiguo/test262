// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Test override of Object.Assign(target,...sources),
             Every string from sources will be wrapped to objects, and override from the first letter(result[0]) all the time
es6id:  19.1.2.1
includes: [assert.js]
---*/

var target = 12;
var result = Object.assign(target,"aaa","bb2b","1c");

assert.sameValue(Object.keys(result).length, 4 , "The length should be 4 in the final object,but actual length: " + Object.keys(result).length +" .");
assert.sameValue(result[0], "1", "The value should be {\"0\":\"1\"}, but we got:{\"0\":\""+ result[0] + "\"}.");
assert.sameValue(result[1], "c", "The value should be {\"1\":\"c\"}, but we got:{\"1\":\""+ result[1] + "\"}.");
assert.sameValue(result[2], "2", "The value should be {\"2\":\"2\"}, but we got:{\"2\":\""+ result[2] + "\"}.");
assert.sameValue(result[3], "b", "The value should be {\"3\":\"b\"}, but we got:{\"3\":\""+ result[3] + "\"}.");