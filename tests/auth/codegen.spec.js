import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://remix-jira-clone.onrender.com/sign-in');
});