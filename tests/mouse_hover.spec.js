const { test, expect } = require("@playwright/test");

test("Mouse hover", async function ({ page }) {
  // Step 1: Go to the sign-in page
  await page.goto("https://dribbble.com/");

  await page.locator("//a[.='Explore']").hover({force:true});

  // Click the 'Popular' link
  await page.click(
    'li a.site-nav-sub__link.site-nav-sub__link--bold[href="/shots/popular"]'
  );

  // Optionally, verify navigation or perform further actions
  await page.waitForTimeout(3000);
});
