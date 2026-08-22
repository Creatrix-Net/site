#!/usr/bin/env bash
set -euo pipefail

bundle exec jekyll build --baseurl /al-folio
[ -f _site/index.html ]
[ -s _site/index.html ]
