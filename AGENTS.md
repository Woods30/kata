# Kata Project Conventions

## Overview

This repository builds Kata, an AI agent programming best-practices framework. Kata uses reusable workflows, skills, constraints, and validation loops to turn AI coding from random improvisation into stable engineering action.

## Tech Stack

- Skills: Markdown-based `SKILL.md`
- Scripts: Node.js
- Platforms: Codex and Claude Code

## Workflow

- Install only installs Kata skill and platform metadata.
- `kata init` initializes target project structure.
- Planning writes to `docs/spec.md`, `docs/prompt_plan.md`, and `docs/todo.md`.
- Project memory lives under `.claude/memory/`.
- Project-level hooks use `.claude/settings.json` and `.codex/settings.json`; do not use invented hook directories as activation mechanisms.

## Development Rules

- Do not restore the pre-Kata project name or command entry.
- Do not use the removed legacy docs tree.
- Preserve existing user project files during initialization.
- Keep Codex support through `AGENTS.md` and `.codex-plugin/plugin.json`.
- Keep Claude Code support through `CLAUDE.md`, `.claude-plugin/plugin.json`, and `commands/kata.md`.
