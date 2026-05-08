#!/usr/bin/env node
/**
 * Kata skill installer.
 *
 * Installs Kata into platform-readable locations only. Project scaffolding is
 * handled by `kata init` / `kata:init`, implemented in scripts/init-project.js.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const SKILL_SRC = path.join(REPO_ROOT, 'skills', 'kata');
const CODEX_PLUGIN_SRC = path.join(REPO_ROOT, '.codex-plugin');
const CLAUDE_PLUGIN_SRC = path.join(REPO_ROOT, '.claude-plugin');

const DEFAULT_PLATFORM = 'both';

function parseArgs(argv) {
  const args = { command: 'add', packageName: 'kata', platform: DEFAULT_PLATFORM, target: process.cwd() };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === 'add') {
      args.command = 'add';
      if (argv[i + 1] && !argv[i + 1].startsWith('-')) {
        args.packageName = argv[i + 1];
        i += 1;
      }
    } else if (arg === '--platform' || arg === '-p') {
      args.platform = argv[i + 1] || DEFAULT_PLATFORM;
      i += 1;
    } else if (arg.startsWith('--platform=')) {
      args.platform = arg.slice('--platform='.length);
    } else if (arg === '--target' || arg === '-t') {
      args.target = path.resolve(argv[i + 1] || process.cwd());
      i += 1;
    } else if (arg.startsWith('--target=')) {
      args.target = path.resolve(arg.slice('--target='.length));
    } else if (arg === '--help' || arg === '-h') {
      args.help = true;
    }
  }

  return args;
}

function usage() {
  console.log(`Kata installer

Usage:
  npx skills add kata
  kata add --platform=both
  kata add --platform=codex
  kata add --platform=claude

Options:
  --platform <codex|claude|both>  Platform metadata to install. Default: both
  --target <dir>                  Target project directory. Default: cwd

The Skills CLI shape is npx skills add <package>; do not put Kata-specific
platform options on the public skills add example. This installer defaults to
both platforms. Run kata init in a target project to create AGENTS.md,
CLAUDE.md, docs, memory, and hook templates.`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing source: ${src}`);
  }

  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function installCodex(target) {
  copyDir(SKILL_SRC, path.join(target, 'skills', 'kata'));
  copyDir(CODEX_PLUGIN_SRC, path.join(target, '.codex-plugin'));
  console.log('Installed Codex metadata and skills/kata.');
}

function installClaude(target) {
  copyDir(SKILL_SRC, path.join(target, 'skills', 'kata'));
  copyDir(CLAUDE_PLUGIN_SRC, path.join(target, '.claude-plugin'));
  copyDir(path.join(REPO_ROOT, 'commands'), path.join(target, 'commands'));
  console.log('Installed Claude metadata, commands, and skills/kata.');
}

function install() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }

  if (args.command !== 'add' || args.packageName !== 'kata') {
    throw new Error('Only `skills add kata` is supported by this installer.');
  }

  if (!['codex', 'claude', 'both'].includes(args.platform)) {
    throw new Error(`Unsupported platform: ${args.platform}. Use codex, claude, or both.`);
  }

  ensureDir(args.target);

  if (args.platform === 'codex' || args.platform === 'both') {
    installCodex(args.target);
  }
  if (args.platform === 'claude' || args.platform === 'both') {
    installClaude(args.target);
  }

  console.log('\nKata installed.');
  console.log('Next: run `kata init` in the project you want to scaffold.');
}

try {
  install();
} catch (error) {
  console.error(`Kata install failed: ${error.message}`);
  process.exit(1);
}
