# Kata

Languages: [English](README.md) | [中文](README.zh-CN.md)

Kata is an AI agent programming best-practices framework. It uses reusable workflows, skills, constraints, and validation loops to turn AI coding from random improvisation into stable engineering action.

Kata supports Codex and Claude Code as first-class development tools.

It separates installation from project initialization:

- `npx skills add Woods30/kata` installs Kata skill and default platform metadata.
- `kata init` initializes a target project with agent instructions, docs, memory, and hook templates.

## Install

Install as a portable agent skill:

```bash
npx skills add Woods30/kata
```

Install from Claude Marketplace:

```bash
claude plugin marketplace add github.com/Woods30/kata
claude plugin install kata@kata
```

Supported platforms:

- `codex`: installs `.codex-plugin/` and `skills/kata/`
- `claude`: installs `.claude-plugin/`, `commands/`, and `skills/kata/`
- `both`: installs both platform surfaces

By default, Kata installs both Codex and Claude surfaces. For direct local installs, use `kata add --platform=codex`, `kata add --platform=claude`, or `kata add --platform=both`.

The installer does not create project docs, memory, or hooks. Run `kata init` for that.

`commands/` is a Claude slash-command compatibility layer. Codex does not rely on it; Codex uses `skills/kata/SKILL.md` for implicit skill triggering. `npx skills update` updates installed skills and should not be treated as the source of truth for Claude slash commands; use the Claude Marketplace/plugin install path when commands need to be installed or refreshed.

## Initialize a Project

```bash
kata init
```

`kata init` creates missing files only and appends a marked Kata section to existing instruction files:

- `AGENTS.md`
- `CLAUDE.md`
- `docs/spec.md`
- `docs/prompt_plan.md`
- `docs/todo.md`
- `.kata/memory/project.md`
- `.kata/memory/decisions.md`
- `.kata/memory/session.md`
- `.kata/skills.md`
- `.claude/settings.json`
- `.codex/settings.json`
- `.kata/scripts/session-reminder.sh`
- `.kata/scripts/memory-check.sh`

Hooks are created through platform-supported settings files. Existing settings files are not overwritten; merge them manually if your project already has hooks.

## Framework

- Reusable workflows: initialization, planning, development, and memory.
- Skills: portable `SKILL.md` instructions with progressive disclosure.
- Skill orchestration: installed skills such as `superpowers` are used before Kata's built-in fallback workflows.
- Constraints: project rules in `AGENTS.md` and `CLAUDE.md`.
- Validation loops: brainstorming and spec clarification before planning, tests during development, memory updates before session end.
- Project-level hooks: `.claude/settings.json` and `.codex/settings.json`.
- Shared memory: `.kata/memory/` works across supported IDEs.

## Repository Structure

```text
kata/
├── .codex-plugin/
├── .claude-plugin/
├── commands/
│   ├── kata.md
│   ├── kata:init.md
│   ├── kata:plan.md
│   ├── kata:dev.md
│   ├── kata:test.md
│   └── kata:memory.md
├── scripts/
│   ├── install.js
│   ├── init-project.js
│   ├── kata.js
│   └── skills.js
└── skills/
    ├── kata/
    │   ├── SKILL.md
    │   ├── templates/
    │   └── workflows/
    └── karpathy-guidelines/
```
