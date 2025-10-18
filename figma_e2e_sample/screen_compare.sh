#!/bin/bash

# Figmaからスクリーンショットを取得するスクリプトを実行する
pnpm exec tsx tests/screen_compare/src/get_screen.tsx

# E2Eテストを実行してスクリーンショットを取得する
pnpm exec playwright test