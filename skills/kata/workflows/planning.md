# Planning Workflow

Use this workflow when turning a vague request into project files that can survive across sessions.

## Hard Rule

Before iterating on an implementation plan, run a dialogue-first clarification loop. The agent must ask concrete questions until the fuzzy request has become a decision-ready `docs/spec.md`. Do not create or revise `docs/prompt_plan.md` from a vague request.

## Flow

1. Read `AGENTS.md` or `CLAUDE.md`, then `docs/todo.md` and relevant memory.
2. Start a clarification dialogue. Ask about goal, users, trigger, inputs, outputs, constraints, non-goals, failure behavior, data persistence, compatibility, and acceptance checks.
3. Keep asking only while an answer would materially change the spec or prevent wrong implementation.
4. Write or update `docs/spec.md` with the clarified feature goal, constraints, inputs, outputs, risks, and acceptance checks.
5. Check whether the spec is decision-ready. If meaningful ambiguity remains, list it in the spec and ask before planning.
6. Only after the spec is decision-ready, split it into executable steps in `docs/prompt_plan.md`.
7. Keep `docs/todo.md` as the short cross-session checklist.

## Spec Readiness

`docs/spec.md` is decision-ready when another agent can answer these without guessing:

- What user-visible or developer-visible behavior changes?
- Where does the behavior start and end?
- What inputs, outputs, and error cases matter?
- What is explicitly out of scope?
- How will the change be tested or accepted?

## Output

The plan must be concrete enough that another agent can start from `docs/prompt_plan.md` without re-deciding the design.
