// // auth.setup.ts
// import { test as setup, expect } from '@playwright/test';

// const authFile = 'playwright/.auth/user.json';

// setup('authenticate', async ({ page }) => {
//   // Log in once
//   await page.goto('https://example.com/login');
//   await page.fill('#username', process.env.TEST_USER!);
//   await page.fill('#password', process.env.TEST_PASS!);
//   await page.click('.btn-login');
  
//   // Wait for login to complete
//   await expect(page.locator('h1')).toHaveText('Dashboard');
  
//   // Save the authenticated state to a file
//   await page.context().storageState({ path: authFile });
// });