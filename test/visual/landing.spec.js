const { test, expect } = require('@playwright/test');

test('landing page renders', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Creative|Net|Creative Net/i);
  await expect(page.locator('body')).toContainText(/Creative|Net|Build/i);
});
