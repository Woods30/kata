# Kata Skill Inventory

Record installed skills that Kata should orchestrate before using built-in fallback workflows.

## Planning

- brainstorming: [installed skill name or path]
- spec/planning: [installed skill name or path]

## Development

- TDD: [installed skill name or path]
- subagent/worktree execution: [installed skill name or path]
- code review/check: [installed skill name or path]

## Testing

- test generation: [installed skill name or path]
- browser/UI verification: [installed skill name or path]
- framework-specific testing: [installed skill name or path]

## Notes

- Prefer installed skills when present.
- Fall back to Kata built-in workflows only when no matching skill is available.
- If `superpowers` skills are installed, prefer:
  - `superpowers:brainstorming`
  - `superpowers:writing-plans`
  - `superpowers:test-driven-development`
  - `superpowers:subagent-driven-development`
