const { test, expect } = require("@playwright/test");

test("test dropdown", async function ({ page }) {
  // Step 1: Go to the sign-in page
  await page.goto("https://remix-jira-clone.onrender.com/sign-in");

  // Step 2: Fill in email and password
  await page
    .getByPlaceholder("Enter Email")
    .type("test@gmail.com");
  await page
    .getByPlaceholder("Enter Password")
    .type("Rohit@0098");

  // Step 3: Click the sign-in button
  await page.getByRole("button", { name: "Sign in" }).click();

  // Step 4: Wait for the navigation to workspaces page
  await page.waitForURL(/\/workspaces\/(\d+|create)/, { timeout: 15000 });

  // Step 5: Verify the correct page URL
  await expect(page).toHaveURL(/\/workspaces\/(\d+|create)/);

  const parentDiv = page.locator('div').filter({ hasText: /^Tasks \(3\)$/ });

  // Select the button within the filtered <div>
  const button = parentDiv.getByRole('button');

  // Click the button
  await button.click();

  await page.getByPlaceholder("Enter Task Name").type("test from playwright");
  // Locate the <div> containing the "Due Date" label and button
  const dueDateContainer = page.locator('div').filter({ hasText: 'Due Date' });

  // Select the "Due Date" button inside the container
  const dueDateButton = dueDateContainer.locator('button[aria-haspopup="dialog"]');

  // Click the "Due Date" button to open the date picker
  await dueDateButton.click();

  // Verify the date picker dialog is open (aria-expanded should be "true")
  await expect(dueDateButton).toHaveAttribute('aria-expanded', 'true');

  await page.locator('table[role="grid"] button:has-text("29")').nth(1).click();

  await page.locator('select[name="assigneeId"]').selectOption('2');
  await page.locator('select[name="status"]').selectOption({ value: 'IN_PROGRESS' });

  await page.locator('select[name="projectId"]').selectOption('8');

  await page.locator('button[name="task"]').click();


});
