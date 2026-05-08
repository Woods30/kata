# Kata

Languages: [English](README.md) | [中文](README.zh-CN.md)

File index: [Codex plugin](.codex-plugin/plugin.json) · [Claude plugin](.claude-plugin/plugin.json) · [Kata skill](skills/kata/SKILL.md) · [Kata command](commands/kata.md) · [Installer](scripts/install.js) · [Project init](scripts/init-project.js)

Kata is an AI agent programming best-practices framework. It uses reusable workflows, skills, constraints, and validation loops to turn AI coding from random improvisation into stable engineering action.

Kata supports Codex and Claude Code as first-class development tools.

It separates installation from project initialization:

- `npx skills add Woods30/kata` installs Kata skill and default platform metadata.
- `kata init` initializes a target project with agent instructions, docs, memory, and hook templates.

## Install

```bash
npx skills add Woods30/kata
```

Supported platforms:

- `codex`: installs `.codex-plugin/` and `skills/kata/`
- `claude`: installs `.claude-plugin/`, `commands/kata.md`, and `skills/kata/`
- `both`: installs both platform surfaces

By default, Kata installs both Codex and Claude surfaces. For direct local installs, use `kata add --platform=codex`, `kata add --platform=claude`, or `kata add --platform=both`.

The installer does not create project docs, memory, or hooks. Run `kata init` for that.

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
- `.claude/memory/project.md`
- `.claude/memory/decisions.md`
- `.claude/memory/session.md`
- `.claude/settings.json`
- `.codex/settings.json`
- `.kata/scripts/session-start.sh`

Hooks are created through platform-supported settings files. Existing settings files are not overwritten; merge them manually if your project already has hooks.

## Framework

- Reusable workflows: initialization, planning, development, and memory.
- Skills: portable `SKILL.md` instructions with progressive disclosure.
- Constraints: project rules in `AGENTS.md` and `CLAUDE.md`.
- Validation loops: spec clarification before planning, tests during development, memory updates before session end.
- Project-level hooks: `.claude/settings.json` and `.codex/settings.json`.

## Repository Structure

```text
kata/
├── .codex-plugin/
├── .claude-plugin/
├── commands/
│   └── kata.md
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
