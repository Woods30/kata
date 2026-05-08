---
name: kata
description: Use when a user wants an AI agent programming best-practices framework; initialize an agent-ready project; install or configure reusable AI coding workflows, skills, constraints, and validation loops for Codex and Claude Code; use dialogue to turn vague requirements into docs/spec.md before planning; turn an accepted spec into docs/prompt_plan.md and docs/todo.md; execute development with tests; read or update project memory; prepare session-end memory updates; or run kata:init / /kata init.
---

# Kata

Kata is an AI agent programming best-practices framework. It uses reusable workflows, skills, constraints, and validation loops to turn AI coding from random improvisation into stable engineering action.

Kata keeps the workflow on disk so Codex and Claude Code sessions can resume from project files instead of reconstructing context from chat history.

## Routing

- **Initialize project**: read `workflows/init.md` when the user asks to set up Kata, initialize a project, create agent docs, create memory, or run `kata:init`.
- **Plan feature**: read `workflows/planning.md` when the user asks to clarify a feature, iterate on a plan, write a spec, create a plan, or maintain `docs/spec.md`, `docs/prompt_plan.md`, or `docs/todo.md`.
- **Develop**: read `workflows/development.md` when the user asks to implement `docs/prompt_plan.md`, continue `docs/todo.md`, or execute with tests.
- **Memory**: read `workflows/memory.md` when the user asks to read, search, update, summarize, or close a session with project memory.

## Default Files

Kata projects use these shared files:

- `AGENTS.md` for Codex project instructions.
- `CLAUDE.md` for Claude Code project instructions.
- `docs/spec.md` for the current feature specification.
- `docs/prompt_plan.md` for executable implementation prompts.
- `docs/todo.md` for cross-session progress.
- `.kata/memory/project.md`, `.kata/memory/decisions.md`, and `.kata/memory/session.md` for text project memory shared by supported tools.
- `.claude/settings.json` and `.codex/settings.json` for project-level hooks supported by Claude Code and Codex.

## Rules

- Prefer implicit triggering through this skill description; `/kata` is only a manual fallback.
- During installation, only install Kata skill and platform metadata. Do not initialize the target project.
- During `kata:init`, create or update project structure. Preserve existing user content and append clearly marked Kata sections instead of overwriting.
- Project-level hooks must use platform-supported settings files: `.claude/settings.json` for Claude Code and `.codex/settings.json` for Codex. Do not invent custom hook directories as an activation mechanism.
- Before plan iteration, use a dialogue-first clarification loop to turn vague requirements into a concrete `docs/spec.md`. Do not create or revise `docs/prompt_plan.md` until the spec is decision-ready.
- At session start, read project instructions, `docs/todo.md`, and memory before making non-trivial changes.
- Before ending a session after meaningful work, update memory and `docs/todo.md` with decisions, progress, blockers, and next actions.
