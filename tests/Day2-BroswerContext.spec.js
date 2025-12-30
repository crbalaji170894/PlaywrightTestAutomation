const {test} = require('@playwright/test');

test("My Test with browser context", async ({browser})=>{

});

// browser is predefined Fixtures to invoke the browser when we performing playwright  test
// define it using curly braces ({browser})
//Fixtures are glabal variables
// there are some set of fixtures are available in node modules


test("My Test with browser context", async ({browser})=>{

    const context = await browser.newContext();
 
    //open fresh browser// fresh instance // incoginito

    // stores as vaiable const variable

    const page = await context.newPage();

    await page.goto("https://www.facebook.com/")

    // new Page  method is helps to launch a web page 
    
    //launch fab url page 


});


// need not explicitly to write default page steps use page fixture (page gloabl variable)

test("Page  Test with browser context", async ({browser,page})=>{

    // const context = await browser.newContext();
 
    // //open fresh browser// fresh instance // incoginito

    // // stores as vaiable const variable

    // const page = await context.newPage();

    await page.goto("https://www.facebook.com/")

    // new Page  method is helps to launch a web page 
    
    //launch fab url page 
    

});

// even we need not to mention the broswer fixture

test("Page  Test with browser context", async ({page})=>{

    // const context = await browser.newContext();
 
    // //open fresh browser// fresh instance // incoginito

    // // stores as vaiable const variable

    // const page = await context.newPage();

    await page.goto("https://www.facebook.com/")

    // new Page  method is helps to launch a web page 
    
    //launch fab url page 
    

});