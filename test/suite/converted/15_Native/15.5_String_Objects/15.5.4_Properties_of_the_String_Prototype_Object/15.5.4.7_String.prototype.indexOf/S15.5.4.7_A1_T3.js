// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.indexOf(searchString, position)
 *
 * @section 15.5.4.7
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A1_T3.js
 * @description Checking by using eval
 */

var indexOf = String.prototype.indexOf;

var __obj__pos = {valueOf:function(){return 5;}};

if (typeof toString === "undefined"){
    toString = Object.prototype.toString;
}

var __class__ = toString();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (indexOf(eval("\"[\""),__obj__pos)!=-1) {
  $ERROR('#1: indexOf = String.prototype.indexOf; indexOf(eval("\\"[\\""),__obj__pos)==-1. Actual: indexOf(eval("\\"[\\""),__obj__pos)=='+indexOf(eval("\"[\""),__obj__pos)); 
}
//
//////////////////////////////////////////////////////////////////////////////
