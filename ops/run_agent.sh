#!/usr/bin/env bash
set -euo pipefail

AGENT="${1:-}"
PROMPT_FILE="${2:-}"

if [ -z "$AGENT" ] || [ -z "$PROMPT_FILE" ]; then
  echo "Usage: ./ops/run_agent.sh <claude|gemini|codex> <prompt-file>"
  exit 1
fi

if [ ! -f "$PROMPT_FILE" ]; then
  echo "Prompt file not found: $PROMPT_FILE"
  exit 1
fi

echo
echo "========================================"
echo "Running agent: $AGENT"
echo "Using prompt: $PROMPT_FILE"
echo "========================================"
echo

case "$AGENT" in
  claude)
    claude "$(cat "$PROMPT_FILE")"
    ;;
  gemini)
    gemini "$(cat "$PROMPT_FILE")"
    ;;
  codex)
    codex "$(cat "$PROMPT_FILE")"
    ;;
  *)
    echo "Unknown agent: $AGENT"
    echo "Valid agents: claude, gemini, codex"
    exit 1
    ;;
esac
