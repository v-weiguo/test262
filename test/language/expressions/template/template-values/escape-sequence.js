// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.8.6
description: >
    The TV of TemplateCharacter :: \ EscapeSequence is the SV of
    EscapeSequence.
    The TRV of EscapeSequence :: 0 is the code unit value 0x0030.
    The TRV of EscapeSequence :: HexEscapeSequence is the TRV of the
    HexEscapeSequence.
    The TRV of EscapeSequence :: UnicodeEscapeSequence is the TRV of the
    UnicodeEscapeSequence.
---*/
var calls;

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], ' ', '`\\0` sequence template value');
  assert.sameValue(s.raw[0], '\\0', '`\\0` sequence template raw value');
})`\0`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], 'ÿ', 'HexEscapeSequence template value');
  assert.sameValue(s.raw[0], '\\xff', 'HexEscapeSequence template raw value');
})`\xff`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(
    s.raw[0], '\\uc548', 'UnicodeEscapeSequence template raw value'
  );
})`\uc548`;
assert.sameValue(calls, 1);
