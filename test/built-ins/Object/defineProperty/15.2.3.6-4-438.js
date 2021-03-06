// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-438
description: >
    ES5 Attributes - fail to update [[Configurable]] attribute of
    accessor property ([[Get]] is undefined, [[Set]] is undefined,
    [[Enumerable]] is true, [[Configurable]] is false) to different
    value
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
    get: undefined,
    set: undefined,
    enumerable: true,
    configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

try {
    Object.defineProperty(obj, "prop", {
        configurable: true
    });

    $ERROR("Expected TypeError");
} catch (e) {
    assert(e instanceof TypeError);

    var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

    assert.sameValue(desc1.configurable, false);
    assert.sameValue(desc2.configurable, false);

    verifyNotConfigurable(obj, "prop");

    assert(obj.hasOwnProperty("prop"));
}
