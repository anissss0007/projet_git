import { test, expect } from '@playwright/test'
import { loginpom } from '../pages/loginpom.page'

let lp:loginpom
test.beforeEach("setup",async ({page}) =>
{
await page.goto("https://www.saucedemo.com/")
lp=new loginpom(page);

});

test ("loginWithPom",{tag:"@regression"},async({page})=>
{

    await lp.saisirUsername("standard_user")
    await lp.saisirpassword("secret_sauce")
    await lp.clickLogin()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test("login non valid with pom",{tag:["@regression","@smoke","@endtoend"]},async ({page}) =>
{
    await lp.saisirUsername("anis")
    await lp.saisirpassword("007")
    await lp.clickLogin()
    



//***************3 methodes pour l'assertion pour le non valid********************

//await expect(page.locator("[data-test='error']")).toContainText("Epic sadface: Username and password do not match any user in this service")

//await expect(lp.messageerreur()).toContainText("Epic sadface: Username and password do not match any user in this service")


const errMsg = await lp.messageerreur().textContent()
expect(errMsg).toBe("Epic sadface: Username and password do not match any user in this service")

//***************3 methodes pour l'assertion pour le non valid********************
})