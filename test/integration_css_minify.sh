#!/usr/bin/env bash
set -euo pipefail

bundle exec jekyll build --baseurl /al-folio
find _site -type f \( -name '*.css' -o -name '*.js' \) -print | while read -r file; do
  [ -s "$file" ]
  head -c 1 "$file" >/dev/null
done
