const { test, expect } = require("@playwright/test");
const { text } = require("stream/consumers");

test("Verify auto suggesstion", async({page}) => {
    // step 1:
    await page.goto("https://www.google.com/");

    // step 2:
    await page.locator("textarea[name='q']").type("PlayWright");

    // step 3:
    await page.waitForSelector("//li[@role='presentation']");

    // step 4:
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");

    // step 5:
    await page.keyboard.press("Enter", {delay: 200});

});


test.only("Verify app title using loop", async({page}) => {
    // step 1:
    await page.goto("https://www.google.com/");

    // step 2:
    await page.locator("textarea[name='q']").type("PlayWright");

    // step 3:
    await page.waitForSelector("//li[@role='presentation']");

    // step 4: $$ finds all elements matching the specified selector within the page. if no elements match the selector, the return value resolves to [].
    const elements = await page.$$("//li[@role='presentation']");

    // step 5:
    for(let i=0; i<elements.length; i++){
        const text = await elements[i].textContent();

        if(text.includes('python')){
            await elements[i].click();
            break;
        }
    }

    // step 6:
    await page.keyboard.press("Enter", {delay: 200});


});