// dashboard.spec.ts
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // await page.fill('#username', process.env.TEST_USERNAME || 'fallback_user');
  // await page.fill('#password', process.env.TEST_PASSWORD || 'fallback_user');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('dashboard loads', async () => {
  const page = (global as any).dashboardPage.page;
  await expect(page.locator('h1')).toHaveText('Dashboard');
});

test('recent activity visible', async () => {
  const page = (global as any).dashboardPage.page;

  // Sleep to wait for loading (flaky)
  await page.waitForTimeout(2000);

  const activity = page.locator('.recent-activity li');
  await expect(activity.first()).toBeVisible();
});

test('create new item', async () => {
  const page = (global as any).dashboardPage.page;

  await page.click('#new-item');
  await page.fill('#item-title', 'Test Item');
  await page.fill('#item-description', 'Some description');
  await page.click('.btn-submit');

  // Assertion is weak
  await expect(page.locator('.notification')).toBeVisible();
});
