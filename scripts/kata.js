#!/usr/bin/env node

const { spawnSync } = require('child_process');
const path = require('path');

const command = process.argv[2] || 'help';
const rest = process.argv.slice(3);

function run(script, args) {
  const result = spawnSync(process.execPath, [path.join(__dirname, script), ...args], {
    stdio: 'inherit',
  });
  process.exit(result.status ?? 1);
}

if (command === 'init' || command === 'kata:init') {
  run('init-project.js', rest);
} else if (command === 'add') {
  run('install.js', ['add', ...rest]);
} else {
  console.log(`Kata

Usage:
  kata init
  kata add --platform=both

Use \`npx skills add kata\` for the Skills CLI install shape.`);
}
