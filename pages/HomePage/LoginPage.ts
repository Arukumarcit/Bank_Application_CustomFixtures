import { expect, Locator, Page } from "@playwright/test";
import { CommonLibrary } from "../../utils/CommonLibrary";


export class LoginPage
{
    page:Page;
    private userNameTextbox:Locator
    private passwordTextbox:Locator
    private loginButton:Locator
    
    constructor(page:Page)
    {
     this.page=page   
     this.userNameTextbox= page.locator("#username");
     this.passwordTextbox= page.locator("#password");
     this.loginButton= page.locator("//button[text()='Login']");


    }
    async login(username:string,pwd:string)
    {
      
        await this.userNameTextbox.fill(username)

        await this.passwordTextbox.fill(pwd)
       
        await this.loginButton.click()
            //  await commonlib.storageState('Credtiantls/login.json')

      //  await expect(this.page).toHaveURL("https://playwrightautomationtesting.blogspot.com/2025/06/online-banking.html")

    }
}