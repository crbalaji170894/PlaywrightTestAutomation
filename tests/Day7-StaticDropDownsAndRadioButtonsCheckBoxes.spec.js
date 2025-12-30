const{test, expect} = require ('@playwright/test');


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

test("Choose Radio Buttons and Assert those", async ({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('#username').fill("rahulshettyacademy1");

    await page.locator('#password').fill("learning");

    await page.locator('.radiotextsty').last().click();

    await page.locator('#okayBtn').click();

     // Assertions

     expect(await page.locator('.radiotextsty').last()).toBeChecked(); // this is assertiosn

     //or  to take boolean value

    var value= await page.locator('.radiotextsty').last().isChecked();

    console.log(value);
    
     await page.pause();

    // to pause the test exeution so that Playwright inspector will open

});


test ("Choose CheckBoxes and Assert those", async ({page})=>
{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('#username').fill("rahulshettyacademy1");

    await page.locator('#password').fill("learning");

    await page.locator('#terms').click();

    expect(await page.locator('#terms')).toBeChecked();

    // do uncheck the check box

     await page.locator('#terms').uncheck();

    expect(await page.locator('#terms').isChecked()).toBeFalsy();

    //again check the box verify truthy

    await page.locator('#terms').click();

    expect(await page.locator('#terms').isChecked()).toBeTruthy();

    // to bechecked  verufy checked using in assertions
    // ischeked returns boolean value not used any assertions

    await page.pause();

    // to pause the test exeution so that Playwright inspector will open

    //IcHECKED RETURNS TRUE OR FALSE THEN ASSERT USING TOBEFALSY OR TO BE TRUTHY

});

test.only("Assert Attribute and Value using Blinking Text", async ({page})=>
{
    //toHaveAttribute Assertions

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const documentLink = page.locator("[href*='https://rahulshettyacademy.com/documents-request']")

   //assertions

   //verify the attrbute and value

   await expect (documentLink).toHaveAttribute("class", "blinkingTexts"); //  wrong value

   await expect (documentLink).toHaveAttribute("class", "blinkingText"); //right assertion value
   

});

