// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-88
description: >
    Object.defineProperties - value of 'configurable' property of
    'descObj' is false (8.10.5 step 4.b)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperties(obj, {
    property: {
        configurable: false
    }
});

assert(obj.hasOwnProperty("property"));
verifyNotConfigurable(obj, "property");
