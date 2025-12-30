// It is an Assignment
//https://rahulshettyacademy.com/client/#/auth/login
// Do Register
 
const{test, expect} = require('@playwright/test');


test("ClientApp Login teo Fetch all the text contents using wait mechnism", async({page})=>{

    page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   
    const username = page.locator('#userEmail');
    
    const password = page.locator('#userPassword');

    const button   = page.locator('#login');

    await username.fill("test");

    await username.fill("");  // wipe existing text clear the  text

    await username.fill("balaji.ravichandran@gmail.com");

    await password.type("test@121A");

    await button.click();

    await page.locator('.card-body b').allTextContents();

    // this will return an empty array becuase no synchronizations is present

    // to make the synchronization try to find the first element below method

    console.log(await page.locator('.card-body b').first().textContent());

    // then below step

    const cardtitles =   await page.locator('.card-body b').allTextContents();

    console.log(cardtitles);



});



test.only("ClientApp Login teo Fetch all the text contents using  network mechanicsm", async ({page}) =>
{


    page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   
    const username1 = page.locator('#userEmail');
    
    const password1 = page.locator('#userPassword');

    const button1   = page.locator('#login');

    await username1.fill("test");

    await username1.fill("");  // wipe existing text clear the  text

    await username1.fill("balaji.ravichandran@gmail.com");

    await password1.type("test@121A");

    await button1.click();


    // this will return an empty array becuase no synchronizations is present

    // to make the synchronization try to find wait  first element below method

    // ot all the ui steps are made up on N/W api calls so wait untill all api calls completed

    await page.waitForLoadState('networkidle');

    // then below step

    //or

    await page.locator('.card-body b').last().waitFor();

    const cardtitles =   await page.locator('.card-body b').allTextContents();

    console.log(cardtitles);
});


