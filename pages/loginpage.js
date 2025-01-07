class LoginPage {
    constructor(page){
        this.page = page;
        this.username = "#email";
        this.password = "//input[@placeholder='Enter Password']";
        this.loginBtn = "//button[text()='Sign in']";
    }

    async loginToApplication(){
        await this.page.fill(this.username, "test@gmail.com");
        await this.page.fill(this.password, "Rohit@0098");
        await this.page.click(this.loginBtn);
    }
}

module.exports = LoginPage;