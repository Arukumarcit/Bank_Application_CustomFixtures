import { Locator, Page } from "@playwright/test";
import {parse} from 'csv-parse/sync'
import fs from 'fs'

export class CommonLibrary
{

    page:Page;

    constructor(page:Page)
    {
      this.page=page;

    }
async switchToWindow(index:number)
{
  await this.page.waitForTimeout(2000)
  const windows=this.page.context().pages()
  return windows[index]
}

async gobackNaviation()
{
   await this.page.goBack()
}

async acceptAlert(operation:string,type?:string,value?:string)
{
    this.page.on("dialog",async a1=>{
   if(a1.type()==type  && operation=='ok')
   {
       a1.accept()
   }
   else if(a1.type()==type  && operation=='enter')
   {
      a1.accept(value)

    }
   else if(operation=='cancel')
   {
      a1.dismiss()
    }
})
}
async readingValueFromCSV(path:string)
{

const csvdata=parse(fs.readFileSync(path),{
    columns:true,
    skip_empty_lines:true,
    skip_records_with_empty_values:true
})
return csvdata;

}

async selectByLabel(element:Locator,text:string)
{
 await element.selectOption({label:text})
}



async storageState(storagePath:string)
{
   
    await this.page.waitForLoadState("load")
    await this.page.context().storageState({path:storagePath})

}
async waitAndClick(element:Locator){
 
  await element.waitFor({state:"visible"})
  await element.click();

}


}