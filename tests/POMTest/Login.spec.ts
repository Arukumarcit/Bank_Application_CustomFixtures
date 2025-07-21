import test from '@playwright/test'
import dotenv from 'dotenv'
import { LoginPage } from '../../pages/HomePage/LoginPage'
import { CommonLibrary } from '../../utils/CommonLibrary'
import { HomePage } from '../../pages/HomePage/HomePage'
import  '../../utils/hooks'


dotenv.config({path:'Environment/.env.sit'})

test('Online login', async({page})=>{

    const loginPage=new LoginPage(page)
    const commonLibrary=new CommonLibrary(page)
    const homePage=new HomePage(page)

    const loginData=await commonLibrary.readingValueFromCSV("testdata/LoginDataCred.csv")

    if(await homePage.islogOutPresent()){
       await homePage.logOut()
    }
     
    const loginRole=process.env.role

    for(const csvData of loginData){

    if(csvData.Role===loginRole){
       
        await loginPage.login(csvData.username,csvData.password)
     
    }
    
}
   await commonLibrary.storageState('Credtiantls/login.json')

 

   await homePage.logOut()



})


