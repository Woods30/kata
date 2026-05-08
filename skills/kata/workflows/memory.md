# Memory Workflow

Use this workflow when reading, updating, or closing a session with project memory. Kata memory lives under `.kata/memory/` so Codex, Claude Code, and other IDEs can share the same files.

## Files

- `.kata/memory/project.md`: stable project context, architecture, commands, and constraints.
- `.kata/memory/decisions.md`: decisions with dates, rationale, and consequences.
- `.kata/memory/session.md`: recent progress, blockers, and next actions.

## Session Start

Before non-trivial work, read:

1. `AGENTS.md` or `CLAUDE.md`
2. `docs/todo.md`
3. `.kata/memory/project.md`
4. `.kata/memory/decisions.md`

## Session End

Before ending after meaningful work, update:

- `docs/todo.md` with completed and next tasks.
- `.kata/memory/session.md` with progress and blockers.
- `.kata/memory/decisions.md` if decisions changed.
- `.kata/memory/project.md` if stable project facts changed.

Kata's `Stop` hook runs `.kata/scripts/memory-check.sh`. It blocks once if neither `docs/todo.md` nor `.kata/memory/session.md` changed since the session reminder ran, then asks the agent to update memory or explicitly state that no durable update is needed.

## Rule

Memory should record reusable facts and decisions, not chat transcripts.
