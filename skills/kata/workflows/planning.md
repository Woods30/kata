# Planning Workflow

Use this workflow when turning a vague request into project files that can survive across sessions.

## Hard Rule

Before iterating on an implementation plan, run brainstorming first. The agent must use dialogue to explore, challenge, and clarify the request before writing `docs/spec.md`. Do not create or revise `docs/prompt_plan.md` until brainstorming has produced a decision-ready spec.

## Skill Orchestration

Before using Kata's built-in brainstorming, check `.kata/skills.md` and the available skill list.

- If an installed brainstorming skill exists, use it first. Prefer `superpowers:brainstorming` when available.
- If an installed planning/spec skill exists, use it for spec or plan drafting after brainstorming. Prefer `superpowers:writing-plans` when available.
- If no matching skill is installed, use the built-in flow below.
- Record any useful installed skill discovered during planning in `.kata/skills.md`.

## Flow

1. Read `AGENTS.md` or `CLAUDE.md`, then `docs/todo.md` and relevant memory.
2. Run **Brainstorming**:
   - Ask the user what outcome they want and why now.
   - Generate plausible approaches, including the minimal non-code or docs-only approach.
   - Challenge the request: identify likely wrong assumptions, hidden constraints, failure paths, and tradeoffs.
   - Ask only questions whose answers would change the spec or prevent wrong implementation.
3. Run **Spec Convergence**:
   - Convert the clarified outcome into `docs/spec.md`.
   - Include goal, users, trigger, inputs, outputs, constraints, non-goals, failure behavior, persistence, compatibility, risks, and acceptance checks.
   - If meaningful ambiguity remains, list it under Open Questions and continue the dialogue before planning.
4. Run **Plan Generation** only after the spec is decision-ready:
   - Split `docs/spec.md` into executable steps in `docs/prompt_plan.md`.
   - Keep `docs/todo.md` as the short cross-session checklist.

## Spec Readiness

`docs/spec.md` is decision-ready when another agent can answer these without guessing:

- What user-visible or developer-visible behavior changes?
- Where does the behavior start and end?
- What inputs, outputs, and error cases matter?
- What is explicitly out of scope?
- How will the change be tested or accepted?

## Brainstorming Output

Before writing `docs/prompt_plan.md`, the agent must be able to summarize:

- The chosen direction.
- At least one rejected alternative and why it was rejected.
- The main assumption that could still be wrong.
- The smallest useful next action.

## Output

The plan must be concrete enough that another agent can start from `docs/prompt_plan.md` without re-deciding the design.
