#!/usr/bin/env node

const { spawnSync } = require('child_process');
const path = require('path');

const result = spawnSync(process.execPath, [path.join(__dirname, 'install.js'), ...process.argv.slice(2)], {
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
