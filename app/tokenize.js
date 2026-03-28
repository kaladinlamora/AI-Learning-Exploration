export function tokenize(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((token, index) => ({
      id: index + 1,
      token,
      length: token.length,
      punctuation: /[.,!?;:]/.test(token)
    }));
}
