import { buildDeterministicExplanations } from './explain.js';
import { summarizeTokens } from './tokenize.js';

const promptInput = document.getElementById('prompt');
const modeSelect = document.getElementById('tokenMode');
const tokenCount = document.getElementById('tokenCount');
const uniqueCount = document.getElementById('uniqueCount');
const avgLength = document.getElementById('avgLength');
const contextUsage = document.getElementById('contextUsage');
const explanation = document.getElementById('modeExplanation');
const tokenList = document.getElementById('tokenList');
const presetButtons = document.querySelectorAll('[data-preset]');
const deterministicNotes = document.getElementById('deterministicNotes');
const budgetAlert = document.getElementById('budgetAlert');
const budgetTitle = document.getElementById('budgetTitle');
const budgetDetail = document.getElementById('budgetDetail');

const MODE_EXPLANATIONS = {
  mixed:
    'Mixed mode approximates how many tokenizers split words and punctuation into separate chunks.',
  word: 'Word mode groups all non-whitespace text into whitespace-separated units.',
  character: 'Character mode treats every character as its own token (worst-case token growth).'
};

function createTokenRow(item) {
  const li = document.createElement('li');
  li.className = 'token-row';

  const code = document.createElement('code');
  code.textContent = item.whitespace ? '␠' : item.token;
  li.appendChild(code);

  const meta = document.createElement('span');
  meta.className = 'token-meta';
  meta.textContent = `length ${item.length}${item.punctuation ? ' • punctuation' : ''}`;
  li.appendChild(meta);

  const bar = document.createElement('span');
  bar.className = 'token-bar';
  bar.style.width = `${Math.max(6, Math.min(100, item.length * 10))}%`;
  li.appendChild(bar);

  return li;
}

function renderDeterministicNotes(items) {
  deterministicNotes.innerHTML = '';

  if (items.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No strong signals detected yet. Try longer prompts or switch tokenizer mode.';
    deterministicNotes.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    deterministicNotes.appendChild(li);
  });
}

function render() {
  const mode = modeSelect.value;
  const summary = summarizeTokens(promptInput.value, mode);
  const deterministic = buildDeterministicExplanations({ mode, summary, text: promptInput.value });

  tokenCount.textContent = String(summary.tokenCount);
  uniqueCount.textContent = String(summary.uniqueCount);
  avgLength.textContent = summary.avgTokenLength.toFixed(2);
  contextUsage.textContent = String(summary.estimatedContextUsage);
  explanation.textContent = MODE_EXPLANATIONS[mode] ?? MODE_EXPLANATIONS.mixed;

  budgetAlert.className = `budget-alert ${deterministic.budget.level}`;
  budgetTitle.textContent = deterministic.budget.title;
  budgetDetail.textContent = deterministic.budget.detail;

  renderDeterministicNotes(deterministic.notes);

  tokenList.innerHTML = '';
  summary.tokens.forEach((item) => {
    tokenList.appendChild(createTokenRow(item));
  });
}

modeSelect.addEventListener('change', render);
promptInput.addEventListener('input', render);

presetButtons.forEach((button) => {
  button.addEventListener('click', () => {
    promptInput.value = button.dataset.preset;
    render();
  });
});

render();
