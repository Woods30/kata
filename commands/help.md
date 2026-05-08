---
description: "Kata AI agent programming framework: init, planning, development, test, and memory"
---

# Kata

Use Kata when you need AI agent programming best practices: reusable workflows, skills, constraints, validation loops, project initialization, requirement planning, TDD development, or project memory across Codex and Claude Code.

## Usage

```text
/kata:init
/kata:plan
/kata:dev
/kata:test
/kata:memory
/kata init
/kata plan
/kata dev
/kata test
/kata memory
```

Colon commands such as `/kata:init` and `/kata:test` are direct Claude slash commands. The space-separated forms are manual fallbacks. In Codex, use natural language; Kata is triggered through `skills/kata/SKILL.md`, not through `commands/`.

## Commands

- `init`: create or update `AGENTS.md`, `CLAUDE.md`, `docs/`, `.kata/memory/`, `.claude/settings.json`, `.codex/settings.json`, and `.kata/scripts/`.
- `plan`: brainstorm and clarify requirements into `docs/spec.md`, then update `docs/prompt_plan.md` and `docs/todo.md`.
- `dev`: execute `docs/prompt_plan.md` with tests and keep `docs/todo.md` current.
- `test`: run installed testing skills or Kata's built-in validation flow.
- `memory`: read, search, or update project memory.

## Rules

- Run in the project root.
- Existing project files are preserved.
- Hooks use platform-supported settings files. Existing settings are not overwritten.
