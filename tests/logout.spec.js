import { test, expect } from '@playwright/test';

test("logout test", async ({ page }) => {
  // Navigate to the page with the dropdown menu
  await page.goto('https://remix-jira-clone.onrender.com/workspaces/6'); // Adjust the URL as needed

  // Assume the user is already logged in (You can log in if needed here)
  
  // Click the user avatar to open the dropdown menu
  await page.locator('button[aria-label="User avatar"]').click(); // Adjust the locator for the avatar button

  // Click the "Log out" option from the dropdown
  await page.locator('text=Log out').click();

  // Verify the user is redirected to the sign-in page
  await expect(page).toHaveURL('/sign-in');
});
