const { test, expect } = require("@playwright/test");

test("Verfiy file upload", async ({ page }) => {
  // step 1:
  await page.goto("https://remix-jira-clone.onrender.com/sign-in");

  // step 2:
  await page.getByPlaceholder("Enter Email").type("test@gmail.com");
  await page.getByPlaceholder("Enter Password").type("Rohit@0098");

  // step 3:
  await page.getByRole("button", { name: "Sign in" }).click();

  // Step 4: Wait for the navigation to workspaces page
  await page.waitForURL(/\/workspaces\/(\d+|create)/, { timeout: 15000 });

  // Step 5: Verify the correct page URL
  await expect(page).toHaveURL(/\/workspaces\/(\d+|create)/);

  // step: 6
  await page.click(
    "svg.size-5.text-neutral-500.cursor-pointer.hover\\:opacity-75.transition"
  );

  // step 7: Select the input element by its ID and type into it
  await page.fill("#workspaceName", "My Workspace");

  // step 8:
  // Upload a file using the hidden input field
  const filePath = "./uploads/social-app.jpeg"; // Replace with the actual file path
  await page.setInputFiles('input[name="img"]', filePath);

  // step 9:
  // Click on the "Create Workspace" button
  await page.click('button[type="submit"][name="My Workspace"]');

  //wait for a navigation
  await page.waitForTimeout(3000);
});
