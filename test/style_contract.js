const fs = require('fs');
const path = require('path');

const root = process.cwd();
const forbidden = ['tailwind.config.js', 'assets/tailwind'];

for (const entry of forbidden) {
  const absolute = path.join(root, entry);
  if (fs.existsSync(absolute)) {
    throw new Error(`Forbidden local Tailwind build pipeline detected: ${entry}`);
  }
}

const config = fs.readFileSync(path.join(root, '_config.yml'), 'utf8');
if (!/^theme:\s*al_folio_core\s*$/m.test(config)) {
  throw new Error('Expected _config.yml to set theme: al_folio_core');
}

if (!/^plugins:\s*$/m.test(config) || !/\n\s+-\s*al_folio_core\b/m.test(config)) {
  throw new Error('Expected _config.yml plugins list to include al_folio_core');
}

const gemfile = fs.readFileSync(path.join(root, 'Gemfile'), 'utf8');
if (!/gem\s+['"]al_folio_core['"]\s*,\s*['"]?=\s*1\.[0-9]+\.[0-9]+['"]?/m.test(gemfile)) {
  throw new Error('Expected Gemfile to pin al_folio_core to an exact released version');
}

if (/git:\s*['"]/m.test(gemfile) || /branch:\s*['"]/m.test(gemfile)) {
  throw new Error('Gemfile should not pin al-folio gems to git branches for CI validation');
}

console.log('Style contract passed');
