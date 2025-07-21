

import { expect, Locator, Page } from "@playwright/test";
import { CredtCardAppPage } from "../CreditCard/CredtCardAppPage";
import { DebitCardAppPage } from "../DebitCard/DebitCardAppPage";


export class TrackingApplicationStatus
{
    page:Page
    private readonly trackingNoTextBox:Locator
    private readonly checkStatusClickButton:Locator
    private readonly checkTrackingNumber:Locator
    static trackingStatus:string
  
    
    constructor(page:Page)
    {
     this.page=page
     this.trackingNoTextBox= page.locator("#trackId")
     this.checkStatusClickButton=page.locator("//button[text()='Check Status']")
     this.checkTrackingNumber=page.locator("#statusBox")

    }
   async trackYourCreditCardApplicationStatus(){

    await this.trackingNoTextBox.fill(CredtCardAppPage.creditTrackingNumber)
    await this.checkStatusClickButton.click();
    

   }

   async verifyCreditCardApplicationStatus(){
    TrackingApplicationStatus.trackingStatus =await this.checkTrackingNumber.textContent()??''
    expect(TrackingApplicationStatus.trackingStatus).toBe(`Status for ${CredtCardAppPage.creditTrackingNumber}: In Progress`)


   }
   async trackYourDebitCardApplicationStatus(){

    await this.trackingNoTextBox.fill(DebitCardAppPage.debitCrdTrackingNumber)
    await this.checkStatusClickButton.click();

   }

   async verifyDebitCardApplicationStatus(){
    TrackingApplicationStatus.trackingStatus =await this.checkTrackingNumber.textContent()??''
    expect(TrackingApplicationStatus.trackingStatus).toBe(`Status for ${DebitCardAppPage.debitCrdTrackingNumber}: In Progress`)

   }

}