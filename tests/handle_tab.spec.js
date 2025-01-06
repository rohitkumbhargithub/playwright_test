const { test, expect } = require("@playwright/test");

test("Handle multiple tabs", async({browser}) => {
    const context = await browser.newContext();

    const page = (await context).newPage();
    (await page).goto("https://freelance-learn-automation.vercel.app/login");

    const [newPage] = await Promise.all(
        [
            (await context).waitForEvent("page"),
            (await page).locator("(//a[contains(@href,'facebook')])[1]").click()
        ]
    )

    // await newPage.waitForTimeout(5000);
    await newPage.locator("(//input[@name='email'])[2]").fill("mukesh@gmail.com");
    // await newPage.waitForTimeout(5000);

    // close the new page
    await newPage.close();

    // go back to pervious page
    (await page).locator("#email1").fill("admin@email.com");

    // await page.waitForTimeout(3000);
})