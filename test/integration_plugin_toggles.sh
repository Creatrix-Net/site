#!/usr/bin/env bash
set -euo pipefail

bundle exec jekyll build --baseurl /al-folio
[ -f _site/about/index.html ]
[ -s _site/about/index.html ]
