export function buildDeterministicExplanations({ mode, summary, text }) {
  const notes = [];

  if (mode === 'character') {
    notes.push(
      'Character mode usually inflates token count versus real LLM tokenizers, so it is useful as a worst-case budget stress test.'
    );
  }

  if (mode === 'mixed') {
    notes.push(
      'Mixed mode separates punctuation from words, which better approximates many production tokenizers than simple whitespace splitting.'
    );
  }

  if (summary.avgTokenLength >= 8) {
    notes.push(
      'Long average token length suggests more dense chunks; in practice this can make tokenization outcomes more sensitive to tokenizer vocabulary.'
    );
  }

  if (summary.uniqueCount <= Math.max(2, Math.floor(summary.tokenCount * 0.35)) && summary.tokenCount > 6) {
    notes.push('Lower unique-token ratio indicates repetition, which can affect generation diversity and memory usage in agent loops.');
  }

  if (/\n\s*[-*\d]/.test(text)) {
    notes.push('Structured prompts (lists/steps) often improve instruction clarity but may increase token overhead with formatting markers.');
  }

  const budget = getBudgetWarning(summary.estimatedContextUsage);

  return {
    notes,
    budget
  };
}

export function getBudgetWarning(estimatedContextUsage) {
  if (estimatedContextUsage >= 3000) {
    return {
      level: 'high',
      title: 'High context pressure',
      detail:
        'Estimated usage is very high. In real LLM calls, this can crowd out response space or trigger truncation in multi-step agent workflows.'
    };
  }

  if (estimatedContextUsage >= 1200) {
    return {
      level: 'medium',
      title: 'Moderate context pressure',
      detail:
        'You may be fine for single-turn prompts, but repeated agent/tool steps could accumulate tokens quickly.'
    };
  }

  return {
    level: 'low',
    title: 'Low context pressure',
    detail: 'Estimated usage is relatively small; there is room for additional instructions or multi-step reasoning.'
  };
}
