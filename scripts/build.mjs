import { mkdir, copyFile, rm } from 'node:fs/promises';

const files = ['index.html', 'app.js', 'styles.css', 'tokenize.js', 'explain.js'];

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

for (const file of files) {
  await copyFile(`src/${file}`, `dist/${file}`);
}

console.log('Built static app to ./dist');
