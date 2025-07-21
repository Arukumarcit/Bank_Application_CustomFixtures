
import {test as base} from "@playwright/test"
import { CredtCardAppPage } from "../../pages/CreditCard/CredtCardAppPage";
import { DebitCardAppPage } from "../../pages/DebitCard/DebitCardAppPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { TrackingApplicationStatus } from "../../pages/TrackingPage/TrackApplicationStatus";
import { LoginPage } from "../../pages/HomePage/LoginPage";
import { CommonLibrary } from "../../utils/CommonLibrary";

type MyFixtures = {
creditCardPage:CredtCardAppPage
debitCardPage:DebitCardAppPage
homePage:HomePage
loginPage:LoginPage
commonLibrary:CommonLibrary
trackingStatus:TrackingApplicationStatus
};

export const test=base.extend<MyFixtures>({
loginPage:async ({page},use)=>{
 await use(new LoginPage(page))
},
homePage:async ({page},use)=>{
 await use(new HomePage(page))
},
debitCardPage:async ({page},use)=>{
 await use(new DebitCardAppPage(page))
},

creditCardPage:async ({page},use)=>{
 await use(new CredtCardAppPage(page))
},
commonLibrary:async ({page},use)=>{
 await use(new CommonLibrary(page))
},
trackingStatus: async ({ page }, use) => {
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=Track Application Status') 
  ]);

  const trackingApplicationStatus = new TrackingApplicationStatus(popup);
  await use(trackingApplicationStatus);
}


})

