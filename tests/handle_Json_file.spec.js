const { test, expect } = require("@playwright/test");
const testData = JSON.parse(JSON.stringify(require("../test.json")));
const testUser = JSON.parse(JSON.stringify(require("../test copy.json")));

test.skip("Login in Application", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  await page.locator("//input[@id='email1']").fill(testData.username);
  await page.locator("//input[@id='password1']").fill(testData.password);

  await page.pause();
});


test.describe("Data Driven Login Test", function () {
  for (const data of testUser) {
    test.describe(`Login with users ${data.id}`, function () {
      test("Login to application", async ({ page }) => {
        await page.goto("https://freelance-learn-automation.vercel.app/login");

        await page.locator("//input[@id='email1']").fill(data.username);
        await page.locator("//input[@id='password1']").fill(data.password);
      });
    });
  }
});
