import test from 'node:test';
import assert from 'node:assert/strict';
import { tokenize } from '../src/tokenize.js';

test('tokenize splits words and tracks punctuation', () => {
  const tokens = tokenize('Hello AI world!');
  assert.equal(tokens.length, 3);
  assert.equal(tokens[2].token, 'world!');
  assert.equal(tokens[2].punctuation, true);
});
