import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const file = 'index.html';
const original = readFileSync(file, 'utf8');
const buildHtml = original.replace('href="./src/styles.css"', 'href="/src/styles.css"');

try {
  writeFileSync(file, buildHtml);
  execFileSync(process.execPath, ['node_modules/vite/bin/vite.js', 'build'], { stdio: 'inherit' });
} finally {
  writeFileSync(file, original);
}
