import  test, { chromium, Page } from "@playwright/test";
import { LoginPage } from "../pages/HomePage/LoginPage";
import dotenv from 'dotenv'


dotenv.config({path:`Environment/.env.sit`})

test.beforeEach(async({page})=>{
    const url=process.env.SIT as string
   await page.goto(url)

})

test.afterEach(async({page})=>{

   await page.context().close();

})


