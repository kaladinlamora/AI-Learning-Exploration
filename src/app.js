import { tokenize } from './tokenize.js';

const promptInput = document.getElementById('prompt');
const tokenCount = document.getElementById('tokenCount');
const tokenList = document.getElementById('tokenList');

function render() {
  const tokens = tokenize(promptInput.value);
  tokenCount.textContent = String(tokens.length);
  tokenList.innerHTML = '';

  tokens.forEach((item) => {
    const li = document.createElement('li');
    const code = document.createElement('code');
    code.textContent = item.token;
    li.appendChild(code);

    const metadata = document.createTextNode(
      ` — length ${item.length}${item.punctuation ? ' (includes punctuation)' : ''}`
    );
    li.appendChild(metadata);
    tokenList.appendChild(li);
  });
}

promptInput.addEventListener('input', render);
render();
