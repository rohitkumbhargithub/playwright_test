const { test, expect } = require("@playwright/test");
const loginPage = require("../pages/loginpage");
const homePage = require("../pages/homepage");

test("Login in App", async({page}) =>{

    await page.goto("https://remix-jira-clone.onrender.com/sign-in");

    const loginpage = new loginPage(page);
    await loginpage.loginToApplication();

    const logoutpage = new homePage(page);
    // await logoutpage.verifyWorkspaceIcon();
    await logoutpage.logoutFromApplication();
});