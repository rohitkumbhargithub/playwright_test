const { test, expect } = require("@playwright/test");

test("Handling alert", async({page}) => {
    // step: 1
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    // check the dialog box which is type:
    page.on("dialog", async(d) => {

        // check the type
        expect(d.type()).toContain("alert");

        // check the message
        expect(d.message()).toContain("I am a JS Alert");

        // if type or message is present then accept the dialog
        await d.accept();
    })

    // step: 2
    await page.locator("//button[text()='Click for JS Alert']").click();
    await page.waitForTimeout(5000);
});

test("Handling confirm", async({page}) => {
    // step: 1
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    // check the dialog box which is type:
    page.on("dialog", async(dialogWindow) => {

        // check the type
        expect(dialogWindow.type()).toContain("confirm");

        // check the message
        expect(dialogWindow.message()).toContain("I am a JS Confirm");

        // if type or message is present then accept the dialog
        // await dialogWindow.accept();

        // To cancel the confirm box
        await dialogWindow.dismiss();

    })

    // step: 2
    await page.locator("//button[text()='Click for JS Confirm']").click();
    await page.waitForTimeout(5000);
});


test("Handling prompt", async({page}) => {
    // step 1:
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // step 2:
    // check the dialog box which is type:
    page.on("dialog", async(dialogWindow) => {

        // check the type
        expect(dialogWindow.type()).toContain("prompt");

        // check the message
        expect(dialogWindow.message()).toContain("I am a JS prompt");

        // if type or message is present then accept the dialog
        await dialogWindow.accept("Rohit");

        // To cancel the confirm box
        // await dialogWindow.dismiss();

    });

     // step: 3
     await page.locator("//button[text()='Click for JS Prompt']").click();
     await page.waitForTimeout(5000);
});