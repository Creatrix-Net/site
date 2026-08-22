#!/usr/bin/env bash
set -euo pipefail

bundle exec jekyll build --baseurl /al-folio
[ -f _site/assets/js/distillpub/template.v2.js ]
[ -s _site/assets/js/distillpub/template.v2.js ]
