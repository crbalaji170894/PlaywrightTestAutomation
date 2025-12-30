// playwright has defualt assertions using expect fixture

const { test, expect } = require("@playwright/test");

test("Assertions test1", async ({page})=>{

    
    await page.goto("https://www.facebook.com/");

    console.log(await page.title());

    // asserrtions

    await expect(page).toHaveTitle("Facebook – log in or sign up");

});

//In Playwright,  is the built‑in assertion library you use to check conditions in your tests.

// around we have 25 ASSERTIONS

/*const config = ({
  
  testDir: './tests',
  testMatch: '/Day4-AssertionsandRunDfifferentBrowsers.spec.js',
  timeout: 40 *1000,

  expect:{
     timeout: 40 *1000

  },
  reporter: 'html',

  use:{
    browserName: 'firefox',
    headless : true
  }
 
});

module.exports = config


//  headless : true */