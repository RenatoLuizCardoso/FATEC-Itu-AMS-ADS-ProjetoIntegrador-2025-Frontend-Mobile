const { readFileSync, writeFileSync } = require('node:fs');
const { argv, exit } = require('node:process');

const file = argv[2];

if (!file) {
  console.error('Needs an <file>');
  exit(1);
}

const content = readFileSync(file, 'utf-8')
  .split('\n')
  .filter(Boolean)
  .map((line) => line.trim().toLowerCase())
  .join('\n');

writeFileSync(file, `${content}\n`);

console.log(`File: ${file} normalized`);
