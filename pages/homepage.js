const { expect } = require("@playwright/test");

class HomePage {
    constructor(page){
        this.page = page;
        this.menu = 'button[aria-haspopup="menu"]';
        this.logoutBtn = 'div[role="menuitem"]:has-text("Log out")';
        this.workspaceIcon = "'svg.size-5.text-neutral-500.cursor-pointer.hover\\:opacity-75.transition').nth(0)"
    }

    // async verifyWorkspaceIcon(){
    //     await this.page.locator(this.workspaceIcon).waitFor({ state: 'visible', timeout: 10000 });

    // }

    async logoutFromApplication(){
        await this.page.click(this.menu);
        await this.page.click(this.logoutBtn);
    }
}

module.exports = HomePage;