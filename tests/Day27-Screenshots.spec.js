const{test, expect} = require ('@playwright/test');


test("ScreenShot Test Case", async ({page})=>{

    await page.goto("https://www.facebook.com/");

    await expect(page).toHaveTitle("Facebook – log in or sign up");

    await page.locator('#email').fill("crbalaji17@gmail.com");

    await page.locator('#pass').fill("test@123A");
    
    await page.locator ("[name='login']").screenshot({path:'loginlocator.png'}); //locator level screenshot

    await page.locator("[name='login']").click();

    //console.log( await page.locator('._9ay7').textContent());

    await page.screenshot({path:'fulllpage.png'});// page level screenshot

    await page.pause();

    //textConet() to extract the text value

    // Scrreshot we can take page level and locator level

});