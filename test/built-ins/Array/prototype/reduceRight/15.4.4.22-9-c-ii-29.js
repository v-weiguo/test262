// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.22-9-c-ii-29
description: >
    Array.prototype.reduceRight - Number Object can be used as
    accumulator
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var objNumber = new Number();
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objNumber;
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduceRight.call(obj, callbackfn, objNumber) === true && accessed;
    }
runTestCase(testcase);
