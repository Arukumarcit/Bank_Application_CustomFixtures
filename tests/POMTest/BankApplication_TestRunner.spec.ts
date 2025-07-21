

import "../../utils/hooks";
import {test} from "../POMTest/CustomFixtures.spec";



test('Apply credit Card',async({homePage,creditCardPage,trackingStatus})=>{
 

   await homePage.navigateToCreditCardApplicationForm()
   await creditCardPage.fillCreditCardApplication();
   await creditCardPage.findcreditCardTrackingnumber()
   await homePage.navigateToHomePage()
   await homePage.navigateToTrackApplicationStatus();
   await trackingStatus.trackYourCreditCardApplicationStatus()
   await trackingStatus.verifyCreditCardApplicationStatus()

})
test('Apply Debit Card',async({homePage,debitCardPage,trackingStatus})=>{




    await homePage.navigateToDebicreditCardApplicationForm()
    await debitCardPage.fillDebitCardAppForm();
    await debitCardPage.findDebitCardTrackingnumber()
    await homePage.navigateToHomePage()
    await homePage.navigateToTrackApplicationStatus();
    await trackingStatus.trackYourDebitCardApplicationStatus()
    await trackingStatus.verifyDebitCardApplicationStatus();
 
 
 })