import { mkdir, copyFile, rm } from 'node:fs/promises';

const files = ['index.html', 'app.js', 'styles.css', 'tokenize.js'];

await rm('app', { recursive: true, force: true });
await mkdir('app', { recursive: true });

for (const file of files) {
  await copyFile(`src/${file}`, `app/${file}`);
}

console.log('Built static app to ./app');
