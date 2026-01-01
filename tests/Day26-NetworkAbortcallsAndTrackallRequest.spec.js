const{test, expect} = require ('@playwright/test');

// abort any networks calls using regurlar expression in request urls

// Server is Down

// never reach the response  to the browser


test.only("locating the webelements", async ({page})=>{



    await page.route("**/*.css",route =>route.abort());

    await page.route("**/*.{png,jpg,jpeg}",route =>route.abort());

    //above steps are to abort network calls to get fastest load on webpage

    //trace all network request and repsonses

    await page.on('request',request => console.log(request.url()));

    await page.on('response', response =>console.log(response.status(), response.url()));

 
    await page.goto("https://www.facebook.com/");

    await expect(page).toHaveTitle("Facebook – log in or sign up");

    await page.locator('#email').fill("crbalaji17@gmail.com");

    await page.locator('#pass').fill("test@123A");

    await page.pause();

    // await page.locator("[name='login']").click();

    // console.log( await page.locator('._9ay7').textContent());

    //textConet() to extract the text value

});

test("ClientApp Login teo Fetch all the text contents using  network mechanicsm", async ({page}) =>
{
    await page.route("**/*.css",route =>route.abort());

    await page.route("**/*.{png,jpg,jpeg}",route =>route.abort());
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const username1 = page.locator('#userEmail');
    
    const password1 = page.locator('#userPassword');

    const button1   = page.locator('#login');


});
