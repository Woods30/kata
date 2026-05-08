# Test Workflow

Use this workflow when testing, validating, or adding coverage.

## Skill Orchestration

Before using Kata's built-in test flow, check `.kata/skills.md` and the available skill list.

- If an installed testing skill exists, use it first.
- If an installed TDD skill exists and tests need to be written or changed, use it first. Prefer `superpowers:test-driven-development` when available.
- If an installed browser/UI verification skill exists and the change is frontend-facing, use it for browser verification.
- If no matching skill is installed, use the built-in flow below.
- Record any useful installed skill discovered during testing in `.kata/skills.md`.

## Built-In Flow

1. Read `AGENTS.md` or `CLAUDE.md`, `docs/todo.md`, `.kata/skills.md`, and relevant memory.
2. Identify the smallest meaningful test surface: focused unit test, integration test, browser check, or manual command.
3. Use existing project test style and commands.
4. For changed behavior, cover happy path, important edge case, and failure path when practical.
5. Run the focused test first, then broader checks when risk justifies it.
6. Update `docs/todo.md` and `.kata/memory/session.md` with what was verified.

## Output

Report the command or check run, result, and remaining risk.
