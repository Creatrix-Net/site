#!/usr/bin/env bash
set -euo pipefail

bundle exec al-folio upgrade audit
bundle exec al-folio upgrade report
