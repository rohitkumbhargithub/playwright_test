const { test, expect } = require("@playwright/test");

test("valid login and logout", async ({ page }) => {
  // Step 1: Go to the sign-in page
  await page.goto("https://remix-jira-clone.onrender.com/sign-in");

  // Step 2: Fill in email and password
  await page.getByPlaceholder("Enter Email").type("playwright@gmail.com", { delay: 200 });
  await page.getByPlaceholder("Enter Password").type("playwright@123", { delay: 200 });

  // Step 3: Click the sign-in button
  await page.getByRole("button", { name: "Sign in" }).click();

  // Step 4: Wait for the navigation to workspaces page
  await page.waitForURL(/\/workspaces\/(\d+|create)/, { timeout: 15000 });

  // Step 5: Verify the correct page URL
  await expect(page).toHaveURL(/\/workspaces\/(\d+|create)/);

  // Step 6: Wait for the user avatar button (with aria-haspopup="menu") to be visible and clickable
  await page.waitForSelector('button[aria-haspopup="menu"]', {
    timeout: 10000,
  });

  // Step 7: Click the user avatar button to open the dropdown menu
  await page.locator('button[aria-haspopup="menu"]').click();

  // Step 8: Wait for the "Log out" option (role="menuitem") to appear in the dropdown
  await page.waitForSelector('div[role="menuitem"]:has-text("Log out")', {
    timeout: 10000,
  });

  // Step 9: Click the "Log out" option to log out

  await page.locator('div[role="menuitem"]:has-text("Log out")').click();

  // Step 10: Verify the user is redirected to the sign-in page
  await expect(page).toHaveURL("https://remix-jira-clone.onrender.com/sign-in");
});
