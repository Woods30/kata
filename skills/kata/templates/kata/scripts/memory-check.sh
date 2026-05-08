#!/usr/bin/env sh
set -eu

mkdir -p .kata/state .kata/memory docs

START_FILE=".kata/state/session-start"
REMINDER_FILE=".kata/state/memory-stop-reminded"
SESSION_FILE=".kata/memory/session.md"
TODO_FILE="docs/todo.md"

if [ ! -f "$START_FILE" ]; then
  exit 0
fi

is_newer_than_start() {
  file="$1"
  [ -f "$file" ] || return 1
  [ "$file" -nt "$START_FILE" ]
}

if is_newer_than_start "$SESSION_FILE" || is_newer_than_start "$TODO_FILE"; then
  rm -f "$START_FILE" "$REMINDER_FILE"
  exit 0
fi

if [ -f "$REMINDER_FILE" ]; then
  # Avoid trapping the agent in a stop loop if no update was actually needed.
  rm -f "$START_FILE" "$REMINDER_FILE"
  exit 0
fi

date +%s > "$REMINDER_FILE"
cat >&2 <<'EOF'
Kata memory check: before ending, update docs/todo.md and .kata/memory/session.md if meaningful work happened in this session. If no durable update is needed, say that explicitly, then stop again.
EOF
exit 2
