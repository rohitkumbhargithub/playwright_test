const { test, expect } = require("@playwright/test");


test("New register", async ({ page }) => {
    await page.goto('https://remix-jira-clone.onrender.com/sign-up');

    // Fill in email and password
    await page.getByPlaceholder('Enter Name').type('playwright');
    
    await page.getByPlaceholder('Enter Email').type('playwright@gmail.com');

    await page.getByPlaceholder('Enter Password').type('playwright@123');
    await page.getByPlaceholder('Confirm Password').type('playwright@123');

  
    // Click the sign-in button
    await page.getByRole('button', { name: 'Register' }).click();
  
    // Wait for navigation to a valid /workspaces route
    await page.waitForURL(/\/workspaces\/(\d+|create)/, { timeout: 15000 });

    // Verify the URL matches either /workspaces/{workspaceId} or /workspaces/create
    await expect(page).toHaveURL(/\/workspaces\/(\d+|create)/);

  });
  