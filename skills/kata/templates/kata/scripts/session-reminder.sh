#!/usr/bin/env sh
mkdir -p .kata/state
if [ ! -f .kata/state/session-start ]; then
  date +%s > .kata/state/session-start
  rm -f .kata/state/memory-stop-reminded
fi

cat <<'EOF'
<kata-session-reminder>
Before non-trivial work, read AGENTS.md or CLAUDE.md, docs/todo.md,
.kata/memory/project.md, and .kata/memory/decisions.md.
Before ending meaningful work, update docs/todo.md and project memory.
</kata-session-reminder>
EOF
