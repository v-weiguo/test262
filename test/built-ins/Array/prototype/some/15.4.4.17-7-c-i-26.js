// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-7-c-i-26
description: >
    Array.prototype.some - This object is the Arguments object which
    implements its own property get method (number of arguments equals
    number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        var firstResult = false;
        var secondResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                firstResult = (val === 11);
                return false;
            } else if (idx === 1) {
                secondResult = (val === 9);
                return false;
            } else {
                return true;
            }
        }

        var func = function (a, b) {
            return Array.prototype.some.call(arguments, callbackfn);
        };

        return !func(11, 9) && firstResult && secondResult;
    }
runTestCase(testcase);
