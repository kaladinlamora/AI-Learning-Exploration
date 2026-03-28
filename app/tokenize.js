const TOKEN_PATTERNS = {
  word: /\S+/g,
  character: /[\s\S]/g,
  mixed: /\w+|[^\w\s]/g
};

function normalizeMode(mode) {
  if (mode === 'word' || mode === 'character' || mode === 'mixed') {
    return mode;
  }
  return 'mixed';
}

export function tokenize(text, mode = 'mixed') {
  const normalizedMode = normalizeMode(mode);
  const pattern = TOKEN_PATTERNS[normalizedMode];
  const matches = (text ?? '').match(pattern) ?? [];

  return matches.map((token, index) => ({
    id: index + 1,
    token,
    length: token.length,
    punctuation: /^[^\w\s]+$/.test(token),
    whitespace: /^\s+$/.test(token)
  }));
}

export function summarizeTokens(text, mode = 'mixed') {
  const tokens = tokenize(text, mode);
  const nonWhitespaceTokens = tokens.filter((token) => !token.whitespace);
  const uniqueCount = new Set(nonWhitespaceTokens.map((token) => token.token.toLowerCase())).size;
  const charCount = (text ?? '').length;
  const avgTokenLength =
    nonWhitespaceTokens.length === 0
      ? 0
      : nonWhitespaceTokens.reduce((sum, token) => sum + token.length, 0) /
        nonWhitespaceTokens.length;

  return {
    tokens,
    tokenCount: nonWhitespaceTokens.length,
    uniqueCount,
    charCount,
    avgTokenLength,
    estimatedContextUsage: Math.round(nonWhitespaceTokens.length * 1.3)
  };
}
