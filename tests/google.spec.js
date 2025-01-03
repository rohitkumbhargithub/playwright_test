const { test, expect } = require("@playwright/test");

test("Verify Title", async function({page}) {
    await page.goto('https://remix-jira-clone.onrender.com/');
    const url = await page.url();

    console.log("Title is ", url);

    const title = await page.title();

    console.log("Title is ", title);

    await expect(page).toHaveTitle("Jira Clone- Sign-in")
})