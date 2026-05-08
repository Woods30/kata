# Init Workflow

Use this workflow when initializing an existing or new project for Kata.

## Goal

Create a cross-platform project scaffold that works in Codex and Claude Code without forcing the user into one tool.

## Steps

1. Inspect the project root for language, package manager, test commands, existing agent files, docs, memory, and hooks.
2. Create or update `AGENTS.md` for Codex. Keep it concise and include project purpose, commands, docs paths, memory rules, and hooks policy.
3. Create or update `CLAUDE.md` for Claude Code with equivalent project rules.
4. Create docs files if missing:
   - `docs/spec.md`
   - `docs/prompt_plan.md`
   - `docs/todo.md`
5. Create memory files if missing:
   - `.claude/memory/project.md`
   - `.claude/memory/decisions.md`
   - `.claude/memory/session.md`
6. Create project-level hook settings where missing:
   - `.claude/settings.json`
   - `.codex/settings.json`
   - `.kata/scripts/session-start.sh`
7. Do not overwrite existing platform settings. If settings already exist, report that manual merge is needed.
8. Add local-only files to `.gitignore` where needed.

## Non-Overwrite Rule

Never replace existing project instructions, docs, memory, or hooks wholesale. If a file exists, append or refresh a clearly marked `Kata` section only when needed.

## Completion Check

After init, report created files, skipped existing files, and any files that need manual review.
