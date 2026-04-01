import { Page } from '@playwright/test'
export class loginpom {
    readonly page: Page;
    constructor(p: Page) {
        this.page = p
    }
    // la premiere phase : declarer les locator 

    elements = {

        username: () => this.page.locator("#user-name"),
        password: () => this.page.locator("#password"),
        login: () => this.page.locator("#login-button"),
        errorMessage: () => this.page.locator("[data-test='error']"),

    }

    // la declaration des methodes

    async saisirUsername(u: string) {
        await this.elements.username().fill(u)
    }

    async saisirpassword(p: string) {
        await this.elements.password().fill(p)
    }

    async clickLogin() {
        await this.elements.login().click()
    }


    // il faut retirer la async afin que le code marche et le await aussi car il attend un message pas un locator car avec async il attend une promesse 
    messageerreur() {
        return this.elements.errorMessage()
    }


    async loginToApp (u:string,p:string)
    {
        await this.saisirUsername(u)
        await this.saisirpassword(p)
       await this.clickLogin()

    }
}