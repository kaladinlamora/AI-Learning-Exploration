import test from 'node:test';
import assert from 'node:assert/strict';
import { tokenize, summarizeTokens } from '../src/tokenize.js';

test('mixed mode separates punctuation', () => {
  const tokens = tokenize('Hello, AI!', 'mixed');
  assert.deepEqual(tokens.map((item) => item.token), ['Hello', ',', 'AI', '!']);
});

test('character mode creates one token per character', () => {
  const tokens = tokenize('ab', 'character');
  assert.equal(tokens.length, 2);
  assert.equal(tokens[0].token, 'a');
});

test('summary returns insight metrics', () => {
  const summary = summarizeTokens('AI AI tools.', 'word');
  assert.equal(summary.tokenCount, 3);
  assert.equal(summary.uniqueCount, 2);
  assert.equal(summary.charCount, 12);
});
