// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-9-c-i-29
description: >
    Array.prototype.reduce - applied to Function object which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === 1);
            }
        }

        var obj = function (a, b, c) {
            return a + b + c;
        };
        obj[0] = 0;
        obj[1] = 1;
        obj[2] = 2;
        obj[3] = 3;

        Array.prototype.reduce.call(obj, callbackfn, initialValue);
        return testResult;
    }
runTestCase(testcase);
