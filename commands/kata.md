---
description: "Kata AI agent programming framework: init, planning, development, and memory"
---

# Kata

Use Kata when you need AI agent programming best practices: reusable workflows, skills, constraints, validation loops, project initialization, requirement planning, TDD development, or project memory across Codex and Claude Code.

## Usage

```text
/kata init
/kata plan
/kata develop
/kata memory
```

These commands are manual fallbacks. The Kata skill is primarily intended to trigger implicitly from natural language.

## Commands

- `init`: create or update `AGENTS.md`, `CLAUDE.md`, `docs/`, `.claude/memory/`, `.claude/settings.json`, `.codex/settings.json`, and `.kata/scripts/`.
- `plan`: clarify requirements into `docs/spec.md`, then update `docs/prompt_plan.md` and `docs/todo.md`.
- `develop`: execute `docs/prompt_plan.md` with tests and keep `docs/todo.md` current.
- `memory`: read, search, or update project memory.

## Rules

- Run in the project root.
- Existing project files are preserved.
- Hooks use platform-supported settings files. Existing settings are not overwritten.
