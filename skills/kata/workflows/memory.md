# Memory Workflow

Use this workflow when reading, updating, or closing a session with project memory.

## Files

- `.claude/memory/project.md`: stable project context, architecture, commands, and constraints.
- `.claude/memory/decisions.md`: decisions with dates, rationale, and consequences.
- `.claude/memory/session.md`: recent progress, blockers, and next actions.

## Session Start

Before non-trivial work, read:

1. `AGENTS.md` or `CLAUDE.md`
2. `docs/todo.md`
3. `.claude/memory/project.md`
4. `.claude/memory/decisions.md`

## Session End

Before ending after meaningful work, update:

- `docs/todo.md` with completed and next tasks.
- `.claude/memory/session.md` with progress and blockers.
- `.claude/memory/decisions.md` if decisions changed.
- `.claude/memory/project.md` if stable project facts changed.

## Rule

Memory should record reusable facts and decisions, not chat transcripts.
