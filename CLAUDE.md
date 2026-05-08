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
- Project memory lives under `.kata/memory/`.
- Project-level hooks use `.claude/settings.json` and `.codex/settings.json`; do not use invented hook directories as activation mechanisms.

## Development Rules

- Do not restore the pre-Kata project name or command entry.
- Do not use the removed legacy docs tree.
- Preserve existing user project files during initialization.
- Keep Codex support through `AGENTS.md` and `.codex-plugin/plugin.json`.
- Keep Claude Code support through `CLAUDE.md`, `.claude-plugin/plugin.json`, and `commands/`.
- Treat `commands/` as Claude slash-command compatibility only; Codex should rely on skill description triggering.

## Agent Behavior Constraints

- Think before coding: state assumptions when they affect implementation, surface ambiguity, and ask only when a silent choice would be risky.
- Prefer the simplest working change: no speculative features, single-use abstractions, or configurability that was not requested.
- Make surgical edits: touch only files and lines needed for the task, match existing style, and avoid unrelated refactors or formatting churn.
- Clean up only consequences of your own change, such as imports, variables, or functions made unused by your edit.
- Use verifiable goals: for fixes, reproduce the issue when practical; for changes, define the check that proves completion.
- For multi-step work, keep the plan brief and tie each step to a concrete verification.
- If a change grows larger than needed, simplify before handing it off.
