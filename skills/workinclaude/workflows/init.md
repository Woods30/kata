# Init Workflow

## Overview

Initializes a project for team collaboration.

## New Project Init

1. Scan project structure (language, framework, existing conventions)
2. Auto-install skills via install.js:
   - Clone superpowers from GitHub (if not exists)
   - Copy karpathy-guidelines to project skills directory
   - Copy workinclaude skill to project skills directory
3. Generate `CLAUDE.md` with project-level conventions
4. Generate `CLAUDE.local.template.md` for team members
5. Create `.claude/memory/` directory structure
6. Ensure `CLAUDE.local.md` in `.gitignore`
7. Initialize memory with project context

## Existing Project Import

1. Analyze existing project patterns and conventions
2. Generate `CLAUDE.md` capturing discovered patterns
3. Generate `CLAUDE.local.template.md`
4. Setup `.claude/memory/` if not exists
5. Create initial project memory (architecture, key decisions)

## Skill Auto-Install

During init, install.js handles:
- `superpowers` - cloned from https://github.com/obra/superpowers.git
- `karpathy-guidelines` - copied from plugin
- `workinclaude` - copied from plugin