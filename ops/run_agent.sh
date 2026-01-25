# Usage in terminal example:
# ./ops/run_agent.sh \
#  claude \
#  agents/init-claude-code-design-expert.md \
#  tasks/design/review-homepage.md


#  !/usr/bin/env bash
set -euo pipefail

AGENT="${1:-}"
INIT_FILE="${2:-}"
TASK_FILE="${3:-}"

if [ -z "$AGENT" ] || [ -z "$INIT_FILE" ] || [ -z "$TASK_FILE" ]; then
  echo "Usage: ./ops/run_agent.sh <claude|gemini|codex> <init-file> <task-file>"
  exit 1
fi

if [ ! -f "$INIT_FILE" ]; then
  echo "Init file not found: $INIT_FILE"
  exit 1
fi

if [ ! -f "$TASK_FILE" ]; then
  echo "Task file not found: $TASK_FILE"
  exit 1
fi

PROMPT="$(cat "$INIT_FILE")"$'\n\n'"$(cat "$TASK_FILE")"

echo
echo "========================================"
echo "Running agent: $AGENT"
echo "Init profile: $INIT_FILE"
echo "Task prompt:  $TASK_FILE"
echo "========================================"
echo

case "$AGENT" in
  claude)
    claude "$PROMPT"
    ;;
  gemini)
    gemini "$PROMPT"
    ;;
  codex)
    codex "$PROMPT"
    ;;
  grok)
    grok "$PROMPT"
    ;;
  *)
    echo "Unknown agent: $AGENT"
    echo "Valid agents: claude, gemini, codex, grok"
    exit 1
    ;;
esac