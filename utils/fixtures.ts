// fixtures.ts
import { test as base, Browser, BrowserContext, Page } from '@playwright/test';
import dotenv from 'dotenv'

dotenv.config({path:`Environment/.env.sit`})
type MyFixtures = {
page: Page;
};

export const test = base.extend<MyFixtures>({
page: async ({ browser }, use) => {
const context = await browser.newContext();
const page = await context.newPage();
const url=process.env.SIT as string
await page.goto(url)

await use(page);

await page.close();
await context.close();
},
});

export { expect } from '@playwright/test';