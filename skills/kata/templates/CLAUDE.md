# Project Instructions

## Overview

[Describe what this project does in one paragraph.]

This project uses Kata as an AI agent programming best-practices framework: reusable workflows, skills, constraints, and validation loops that turn AI coding into stable engineering action.

## Commands

- Install dependencies: `[command]`
- Run tests: `[command]`
- Run lint/checks: `[command]`
- Start locally: `[command]`

## Kata Workflow

- At session start, read `docs/todo.md` and `.kata/memory/project.md`.
- Check `.kata/skills.md` and use matching installed skills before Kata built-in fallbacks.
- For new work, brainstorm and clarify requirements into `docs/spec.md`.
- Turn accepted specs into `docs/prompt_plan.md` and `docs/todo.md`.
- During development, keep tests close to the changed behavior.
- Before ending a meaningful session, update `docs/todo.md` and `.kata/memory/session.md`.

## Agent Constraints

- Think before coding: state assumptions when they affect implementation, surface ambiguity, and ask only when a silent choice would be risky.
- Prefer the simplest working change: no speculative features, single-use abstractions, or configurability that was not requested.
- Make surgical edits: touch only files and lines needed for the task, match existing style, and avoid unrelated refactors or formatting churn.
- Clean up only consequences of your own change, such as imports, variables, or functions made unused by your edit.
- Use verifiable goals: for fixes, reproduce the issue when practical; for changes, define the check that proves completion.
- For multi-step work, keep the plan brief and tie each step to a concrete verification.
- If a change grows larger than needed, simplify before handing it off.

## Docs

- Current spec: `docs/spec.md`
- Implementation plan: `docs/prompt_plan.md`
- Cross-session checklist: `docs/todo.md`

## Memory

- Project context: `.kata/memory/project.md`
- Decisions: `.kata/memory/decisions.md`
- Session progress: `.kata/memory/session.md`

## Hooks

Project-level hooks use platform-supported settings files:

- Codex: `.codex/settings.json`
- Claude Code: `.claude/settings.json`

Kata's default hooks call:

- `.kata/scripts/session-reminder.sh` on `UserPromptSubmit` to remind agents to read docs and memory.
- `.kata/scripts/memory-check.sh` on `Stop` to require a session memory check before ending.
