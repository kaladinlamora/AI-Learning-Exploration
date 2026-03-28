import test from 'node:test';
import assert from 'node:assert/strict';
import { buildDeterministicExplanations, getBudgetWarning } from '../src/explain.js';

test('budget warning is high for large context usage', () => {
  const budget = getBudgetWarning(3200);
  assert.equal(budget.level, 'high');
});

test('deterministic explanation provides mode note and budget', () => {
  const summary = {
    tokenCount: 12,
    uniqueCount: 3,
    avgTokenLength: 4.2,
    estimatedContextUsage: 1500
  };

  const result = buildDeterministicExplanations({ mode: 'mixed', summary, text: 'a b c d e f g h i j' });
  assert.equal(result.budget.level, 'medium');
  assert.equal(result.notes.length > 0, true);
});
