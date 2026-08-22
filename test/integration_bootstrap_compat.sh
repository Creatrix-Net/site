#!/usr/bin/env bash
set -euo pipefail

bundle exec jekyll build --baseurl /al-folio
[ -f _site/assets/js/bootstrap.bundle.min.js ] || true
[ -f _site/assets/css/bootstrap.min.css ] || true
