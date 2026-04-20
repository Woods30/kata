# Development Workflow

## Overview

Executes implementation plan using subagent-driven development with TDD.

## Flow

1. Load implementation plan from `docs/superpowers/plans/`
2. For each task using `superpowers:subagent-driven-development`:
   - Use `superpowers:test-driven-development` for TDD cycle:
     - Write failing test (RED)
     - Verify test fails correctly
     - Write minimal code (GREEN)
     - Verify test passes
     - Refactor if needed
   - Create fresh worktree (if using worktrees)
   - Commit
3. Code review before completion

## Entry Point

`/workinclaude develop` → starts development workflow