// Test runner file
// created automatically when palywright automation project is created
//remove unnecessay comments and configs
// wht borwser to runm what timeouts
//default time out 30 seconds
// two time outsone is fo for all steps, one is for assertions


/*export default defineConfig({
  
  testDir: './tests',

  timeout: 40 *1000,

  expect:{
     timeout: 40 *1000

  },
  reporter: 'html',

  use:{
    browserName: 'chromium'
  }
 
});*/

// make it const config variable and do export the config varable in all required test files in globally

/* const config=({
  
  testDir: './tests',

  timeout: 40 *1000,

  expect:{
     timeout: 40 *1000

  },
  reporter: 'html',

  use:{
    browserName: 'chromium'
  }
 
});*/

// module.exports = config
// playwright executed default with headless mode , if need --headed need to provide 
// npx playwright test --head
//npx is node module find the playwright package




const {test} = require('@playwright/test');

test('My Fisrst test excution launch web page', async ({page})=>
{

    await page.goto("https://www.facebook.com/");

    
});



test.only('My Fisrst test excution launch web page using only', async ({page})=>
{

    await page.goto("https://www.facebook.com/");

    
});


/*const config = ({
  
  testDir: './tests',
  testMatch: '/Day3-PlaywrightConfigFile.spec.js',
  timeout: 40 *1000,

  expect:{
     timeout: 40 *1000

  },
  reporter: 'html',

  use:{
    browserName: 'chromium'
  }
 
});

module.exports = config

*/