const { test, expect } = require("@playwright/test");

test("Working with load state", async({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByText("New user? Signup").click();


    // network is not idle wait
    await page.waitForLoadState("networkidle");

    const count = await page.locator("//input[@type='checkbox']").count();

    expect(count).toBe(9);
})