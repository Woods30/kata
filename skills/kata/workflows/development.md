# Development Workflow

Use this workflow when executing `docs/prompt_plan.md` or continuing `docs/todo.md`.

## Flow

1. Read project instructions, `docs/todo.md`, `docs/prompt_plan.md`, and memory.
2. Pick the next unchecked task from `docs/todo.md` unless the user specifies another task.
3. Follow the repository's existing test style.
4. Prefer TDD for behavioral changes:
   - Add or update the focused test.
   - Confirm the test fails for the expected reason when practical.
   - Implement the minimum code needed.
   - Run the focused test, then broader checks when risk justifies it.
5. Update `docs/todo.md` and memory before finishing meaningful work.

## Guardrails

Do not let implementation drift away from `docs/spec.md`. If the spec is wrong, update the spec before changing the code.
