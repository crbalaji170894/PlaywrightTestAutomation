const{test, expect} = require ('@playwright/test');

//npx playwright test --headed --debug
// tracing
//use playwright inspector using that find the css


test("Static DropDowns with select class", async ({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('#username').fill("rahulshettyacademy1");

    await page.locator('#password').fill("learning");

    // await page.locator('#terms').click();

    // await page.locator('#signInBtn').click();

    const dropDown=  page.locator('select.form-control');

    await dropDown.selectOption("Teacher");

    await page.pause();

    // to pause the test exeution so that Playwright inspector will open

});



test.only("Child windows handling with promise.all", async ({browser})=>
{
    //toHaveAttribute Assertions
    const context =  await browser.newContext();

    const page =  await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const documentLink = page.locator("[href*='https://rahulshettyacademy.com/documents-request']");

    // if i click above  link it open up new window same Browser or same Context

    // need to handle new windows in same browser or same context in asynchronusly

    // there is a method called promise.all() which retruns an array of new pages (array of promises)

    // promise stages  promise pending, promise rejected , promise fullfilled

    // do not give await inside promise.all (content1, contnets2)

    // run these steps are parallyly which is asynchronusly

    //once fullfilled promiese it will come out from promise.all executions

    // use broswer fixture and create new context and new page


    const [newPage] =await  Promise.all(
        [
        context.waitForEvent('page'), //listen any new page 
         // before clicking the link to opne up new page we have to wait for event page in same context asynchronausly
        documentLink.click()
        
        ]
    )

    const text= await newPage.locator(".im-para.red").textContent();

    console.log(text)

    const arrayText = text.split("@")
   
    const domain =  arrayText[1].split(" ")[0]
    
    //console.log(domain);
   
    await page.locator("#username").fill(domain);
   
    console.log(await page.locator("#username").inputValue());

    await page.pause();

    //bove steps no need to provide await to make parllal execution to catch the new pages once it is open up



});