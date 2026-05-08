#!/usr/bin/env node
/**
 * Kata project initializer.
 *
 * Creates cross-platform project docs, memory, and hook templates. Existing
 * files are preserved; Kata sections are appended only when missing.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const TEMPLATE_ROOT = path.join(REPO_ROOT, 'skills', 'kata', 'templates');
const KATA_MARKER_START = '<!-- KATA:START -->';
const KATA_MARKER_END = '<!-- KATA:END -->';

function parseArgs(argv) {
  const args = { target: process.cwd() };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === 'init') {
      continue;
    }
    if (arg === '--target' || arg === '-t') {
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
  console.log(`Kata project initializer

Usage:
  kata init
  kata:init
  node scripts/init-project.js --target /path/to/project

Creates or updates:
  AGENTS.md, CLAUDE.md
  docs/spec.md, docs/prompt_plan.md, docs/todo.md
  .kata/skills.md
  .kata/memory/project.md, decisions.md, session.md
  .claude/settings.json, .codex/settings.json
  .kata/scripts/session-reminder.sh, memory-check.sh`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readTemplate(relativePath) {
  return fs.readFileSync(path.join(TEMPLATE_ROOT, relativePath), 'utf8');
}

function writeIfMissing(targetPath, content, created, skipped) {
  ensureDir(path.dirname(targetPath));
  if (fs.existsSync(targetPath)) {
    skipped.push(targetPath);
    return false;
  }
  fs.writeFileSync(targetPath, content);
  created.push(targetPath);
  return true;
}

function kataSection(fileName) {
  return `${KATA_MARKER_START}
## Kata Workflow

- At session start, read \`docs/todo.md\` and \`.kata/memory/project.md\`.
- Check \`.kata/skills.md\` and use matching installed skills before Kata built-in fallbacks.
- For new work, brainstorm and clarify requirements into \`docs/spec.md\`.
- Turn accepted specs into \`docs/prompt_plan.md\` and \`docs/todo.md\`.
- Before ending meaningful work, update \`docs/todo.md\` and \`.kata/memory/session.md\`.
- Project-level hooks use \`.claude/settings.json\` and \`.codex/settings.json\`.
- Kata's default hooks call \`.kata/scripts/session-reminder.sh\` and \`.kata/scripts/memory-check.sh\`.

## Agent Constraints

- Think before coding: state assumptions when they affect implementation, surface ambiguity, and ask only when a silent choice would be risky.
- Prefer the simplest working change: no speculative features, single-use abstractions, or configurability that was not requested.
- Make surgical edits: touch only files and lines needed for the task, match existing style, and avoid unrelated refactors or formatting churn.
- Clean up only consequences of your own change, such as imports, variables, or functions made unused by your edit.
- Use verifiable goals: for fixes, reproduce the issue when practical; for changes, define the check that proves completion.
- For multi-step work, keep the plan brief and tie each step to a concrete verification.
- If a change grows larger than needed, simplify before handing it off.

Primary file for this tool: \`${fileName}\`.
${KATA_MARKER_END}
`;
}

function appendKataSection(targetPath, fileName, updated) {
  if (!fs.existsSync(targetPath)) {
    return;
  }

  const content = fs.readFileSync(targetPath, 'utf8');
  if (content.includes(KATA_MARKER_START) || content.includes('## Kata Workflow')) {
    return;
  }

  const separator = content.endsWith('\n') ? '\n' : '\n\n';
  fs.writeFileSync(targetPath, `${content}${separator}${kataSection(fileName)}`);
  updated.push(targetPath);
}

function copyTemplateTree(sourceRelativeDir, targetDir, created, skipped) {
  const sourceDir = path.join(TEMPLATE_ROOT, sourceRelativeDir);
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const srcPath = path.join(sourceDir, entry.name);
    const destPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      copyTemplateTree(path.join(sourceRelativeDir, entry.name), destPath, created, skipped);
    } else {
      writeIfMissing(destPath, fs.readFileSync(srcPath, 'utf8'), created, skipped);
    }
  }
}

function addGitignore(target, pattern, updated) {
  const gitignorePath = path.join(target, '.gitignore');
  const current = fs.existsSync(gitignorePath) ? fs.readFileSync(gitignorePath, 'utf8') : '';
  if (current.split(/\r?\n/).includes(pattern)) {
    return;
  }
  const prefix = current.length && !current.endsWith('\n') ? '\n' : '';
  fs.writeFileSync(gitignorePath, `${current}${prefix}${pattern}\n`);
  updated.push(gitignorePath);
}

function initProject() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }

  const target = args.target;
  ensureDir(target);

  const created = [];
  const skipped = [];
  const updated = [];

  const createdAgents = writeIfMissing(path.join(target, 'AGENTS.md'), readTemplate('AGENTS.md'), created, skipped);
  const createdClaude = writeIfMissing(path.join(target, 'CLAUDE.md'), readTemplate('CLAUDE.md'), created, skipped);
  if (!createdAgents) {
    appendKataSection(path.join(target, 'AGENTS.md'), 'AGENTS.md', updated);
  }
  if (!createdClaude) {
    appendKataSection(path.join(target, 'CLAUDE.md'), 'CLAUDE.md', updated);
  }

  copyTemplateTree('docs', path.join(target, 'docs'), created, skipped);
  copyTemplateTree('kata', path.join(target, '.kata'), created, skipped);
  copyTemplateTree('claude', path.join(target, '.claude'), created, skipped);
  copyTemplateTree('codex', path.join(target, '.codex'), created, skipped);

  for (const scriptName of ['session-reminder.sh', 'memory-check.sh']) {
    const hookScript = path.join(target, '.kata', 'scripts', scriptName);
    if (fs.existsSync(hookScript)) {
      fs.chmodSync(hookScript, 0o755);
    }
  }

  addGitignore(target, 'CLAUDE.local.md', updated);

  console.log('Kata init complete.\n');
  console.log(`Created: ${created.length}`);
  created.forEach((file) => console.log(`  + ${path.relative(target, file)}`));
  console.log(`Skipped existing: ${skipped.length}`);
  skipped.forEach((file) => console.log(`  = ${path.relative(target, file)}`));
  console.log(`Updated: ${updated.length}`);
  updated.forEach((file) => console.log(`  * ${path.relative(target, file)}`));
  console.log('\nHooks use platform settings files. Existing settings were skipped, not overwritten.');
}

try {
  initProject();
} catch (error) {
  console.error(`Kata init failed: ${error.message}`);
  process.exit(1);
}
