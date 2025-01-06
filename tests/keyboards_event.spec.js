const { test, expect } = require("@playwright/test");

test("Keyboards event", async ({ page }) => {
  // step 1:
  await page.goto("https://remix-jira-clone.onrender.com/sign-in");

  // step 2:
//   await page.getByPlaceholder("Enter Email").type("test@gmail.com");

  // step 3:
  //   await page.keyboard.press("Backspace");
  //   await page.getByPlaceholder("Enter Password").type("Rohit@0098");

  // step 4: handle multiple keys
  /*await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Control+V");*/

// step 5: 
await page.getByPlaceholder("Enter Email").focus();
await page.keyboard.type("test@gmail.com", {delay: 200});
await page.keyboard.press("ArrowLeft", {delay: 200});
await page.keyboard.press("Shift", {delay: 200});

for(let i=0; i<6; i++){
    await page.keyboard.press("ArrowLeft", {delay: 200})
}

await page.keyboard.up("Shift", {delay: 200});
await page.keyboard.press("Backspace", {delay: 200});

  //   await page.getByRole("button", { name: "Sign in" }).click();
});
