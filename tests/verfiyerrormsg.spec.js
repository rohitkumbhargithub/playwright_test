const { test, except, expect } = require("@playwright/test");

test("Verify Error Message", async function({page}) {
  // Step 1: Go to the sign-in page
//   await page.goto("https://remix-jira-clone.onrender.com/sign-up");
  await page.goto("https://remix-jira-clone.onrender.com/sign-in");

  // Step 2: Fill in email and password
  await page.getByPlaceholder("Enter Email").type("123@gmail.com", { delay: 200 });
  await page.getByPlaceholder("Enter Password").type("playwright@1234", { delay: 200 });
// Fill in email and password
// await page.getByPlaceholder('Enter Name').type('playwright');
    
// await page.getByPlaceholder('Enter Email').type('playwright@gmail.com');

// await page.getByPlaceholder('Enter Password').type('playwright@123');
// await page.getByPlaceholder('Confirm Password').type('playwright@123');

  // Step 3: Click the sign-in button
//   await page.getByRole("button", { name: "Register" }).click();
  await page.getByRole("button", { name: "Sign in" }).click();

  const errorMsg = await page.locator('[data-sonner-toast] [data-title]').nth(0).textContent(); // Target the first occurrence
  console.log("Error message is ", errorMsg);

  expect(errorMsg.includes("Invalid")).toBeTruthy();
//   expect(errorMsg.includes("Err")).toBeTruthy();
});