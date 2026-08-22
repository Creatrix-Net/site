const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './',
  timeout: 30000,
  use: {
    baseURL: 'http://127.0.0.1:4100/al-folio/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'bundle exec jekyll serve --baseurl /al-folio --host 127.0.0.1 --port 4100',
    url: 'http://127.0.0.1:4100/al-folio/',
    reuseExistingServer: true,
    timeout: 180000,
  },
});
