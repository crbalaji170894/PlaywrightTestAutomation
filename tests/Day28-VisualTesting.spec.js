const{test, expect} = require ('@playwright/test');


test("visula testig positive case", async ({page})=>{

    await page.goto("https://www.facebook.com/");

    await expect(page).toHaveTitle("Facebook – log in or sign up");

    expect (await page.screenshot()).toMatchSnapshot("VisulaTesting/FBPagbe.png")

    
// Image to Image Comparision

// First run it will faill if does not have expected screenshot then it will will take the screenshot first run test will fail

// second run it will vaildate expetced image with actual image and it provides difference


});

test.only("visual testig Negative case", async ({page})=>{

    await page.goto("https://currentmillis.com/");

   expect (await page.screenshot()).toMatchSnapshot("utctime.png")

    

   // test results see failesd one
// Image to Image Comparision

// First run it will faill if does not have expected screenshot then it will will take the screenshot first run test will fail

// second run it will vaildate expetced image with actual image and it provides difference


});