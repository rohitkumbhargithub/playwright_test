const { test, expect } = require("@playwright/test");

test("Handle frames", async({page}) => {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    // step 2: you can create a frame locator that will enter the iframe and allow selecting elements in that iframe.
    const iframe = await page.frameLocator("//frame[@name='packageListFrame']")

    await iframe.locator("//a[text()='java.applet']").click();

    await page.pause();
});