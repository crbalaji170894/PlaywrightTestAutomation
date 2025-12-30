const{test, expect} = require ('@playwright/test');


test("locating the webelements", async ({page})=>{

    await page.goto("https://www.facebook.com/");

    await expect(page).toHaveTitle("Facebook – log in or sign up");

    await page.locator('#email').fill("crbalaji17@gmail.com");

    await page.locator('#pass').fill("test@123A");

    await page.locator("[name='login']").click();

    console.log( await page.locator('._9ay7').textContent());

    //textConet() to extract the text value

});


test('test with rahul shetty login page invalid credentitals', async ({page})=>
{

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('#username').fill("rahulshettyacademy1");

    await page.locator('#password').fill("learning");

    await page.locator('#terms').click();

    await page.locator('#signInBtn').click();

    //const text = await page.locator('.alert.alert-danger.col-md-12').textContent();

    await expect(page.locator('.alert.alert-danger.col-md-12')).toContainText('Incorrect'); // assertions

    //console.log(text.trim())
});
    //textConet() to extract the text value
    // playwright has intelligence to wait automatically until to find the webelement

test.only('test with rahul shetty login page valid credentitals storing webelements in variables', async ({page})=>
{

    const username = page.locator('#username');

    const password = page.locator('#password');

    const checkbox = page.locator('#terms');

    const signInbutton = page.locator('#signInBtn');

    // await is keyword is required when we perfromign any actions not storing webelements
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await username.fill("rahulshettyacademy");

    await password.fill("learning");

    await checkbox.click();

    await signInbutton.click();

    // Once you login get the name of first product details

   // console.log(await page.locator('.card-title a').first().textContent());

    // or

     console.log(await page.locator('.card-title a').nth(3).textContent());

    //above css has many webelements from that we get using index with nth method

    //how to get all text contents usnder one css webelemnt has mutilple we elements

    const allTitle = await page.locator('.card-title a').allTextContents();

    console.log(allTitle);


    // Notes: if use all text contents must to find the first( element) otherwise it will pass but it wont it wiil retun empty list


});
