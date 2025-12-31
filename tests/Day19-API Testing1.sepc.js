const { test, expect, request } = require('@playwright/test');

//test.beforAll() - to  before executing actual test this will execute firrt (only one excute before all test)

//test.beforeEach()-  lets say we have 3 test cases execute this code befor each test

//request is helping to handle all API related methods  

const jsonLoginPayload = {
    userEmail: "balaji.ravichandran@gmail.com",
    userPassword: "test@121A"
}

let sessionToken;

//payload we stores as a java scritp object as propeties

test.beforeAll(async () => {
    const apicontext = await request.newContext(); // create emty API context

    // API calls maked HTTP methods not anu UI pages

    const apiResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: jsonLoginPayload
        }
    );
    //how to identify the syntax -> jus mouse hover in name of post

    await expect(apiResponse.ok()).toBeTruthy();

    const loginResposne = await apiResponse.json(); // extract Response message

    //Use JSON editon in online

    //login response is an object which holds the complete json

    // from that extract session token

    sessionToken = loginResposne.token;

    console.log(sessionToken)

    //use this token strore it in loacl storage in application developer tools to skip login again

    //when we login session token or cookies, local storage, bearer token anywhere stored

    // need to identofy how they storing session information 

});



// refer below test login via UI

test("ClientApp Login teo Fetch all the text contents using wait mechnism VIA api", async ({ page }) => {

    //value is any variable name

    await page.addInitScript(value => { window.localStorage.setItem('token', value); }, sessionToken);

    //take this test from Day 12 File

    //COMMENTING BELOW STEPS AND ADDING JAVA SCRIPT STEPS INTO PLAYWRIGHT CODE TO BYPASS LOGIN 



    // const username = page.locator('#userEmail');

    // const password = page.locator('#userPassword');

    // const button = page.locator('#login');

    // await username.fill("test");

    // await username.fill("");  // wipe existing text clear the  text

    // await username.fill("balaji.ravichandran@gmail.com");

    // await password.type("test@121A");

    // await button.click();

    await page.goto("https://rahulshettyacademy.com/client/");

    await page.locator('.card-body b').allTextContents();

    // this will return an empty array becuase no synchronizations is present

    // to make the synchronization try to find the first element below method

    console.log(await page.locator('.card-body b').first().textContent());

    // then below step

    const cardtitles = await page.locator('.card-body b').allTextContents();

    console.log(cardtitles);

    const productToCart = 'ADIDAS ORIGINAL';

    for (let i = 0; i < await allProductsElements.count(); i++) {
        if (await allProductsElements.nth(i).locator('b').textContent() == productToCart) {

            console.log(await allProductsElements.nth(i).locator('b').textContent());

            //Next Step is Add to Cart

            await allProductsElements.nth(i).locator("text= Add To Cart").click(); //text loactor

            // dont run a loop 

            break;

        }

    }



    const cartLocator = page.locator('[routerlink="/dashboard/cart"]');

    await cartLocator.click();



    // wait to load car page

    await page.locator('.cart li').last().waitFor();

    const boolvalue = await page.locator(`h3:has-text("${productToCart}")`).isVisible();

    console.log(boolvalue);

    // sudo class (playwright feature to find the locator using text)

    //idVisble is do not have wait checks to refer the documenttion 

    expect(boolvalue).toBeTruthy();

    await page.locator("text=Checkout").click();

    // then landed on payment page

    //Enter the contry name by using dynamic dropdown by using typing subtext

    const countryLocator = page.locator("[placeholder='Select Country']");

    //sub text is "ind" to choose India (Presssequntailly method to type the subtext in dropdown with soem delay)

    // - fill() replaces the entire value instantly.
    //- type() types characters one by one but doesn’t allow fine control over delay per character.
    //- pressSequentially() is useful when you want to mimic realistic typing with delays.


    //Handle Auto suggestive DropDown

    await countryLocator.pressSequentially("ind", { delay: 150 })

    const countryoptions = page.locator('.ta-results.list-group.ng-star-inserted');


    await countryoptions.waitFor();

    const totalcountryCount = await countryoptions.locator('button').count();

    console.log(totalcountryCount)

    for (let j = 0; j < totalcountryCount; j++) {
        if (await countryoptions.locator('button').nth(j).textContent() == " India") {

            await countryoptions.locator('button').nth(j).click();

            break;
        }
    }

    //Do assertions username as a Email id above country field

    //   const emailLoginValue = await page.locator('label[type="text"]').textContent();

    //   console.log(emailLoginValue);

    //   expect(emailLoginValue).toBe("balaji.ravichandran@gmail.com");

    //tocontain (), toBe()

    ///or below step also we can perform assertions

    expect(page.locator('label[type="text"]').first()).toHaveText('balaji.ravichandran@gmail.com');

    // click place order button

    await page.locator(".btnn.action__submit.ng-star-inserted").click();

    // assert thank you order

    expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

    const orderId = await page.locator("label.ng-star-inserted").textContent();

    console.log(orderId);

    //Go to Orders

    await page.locator('button[routerlink="/dashboard/myorders"]').click();

    //WebTable

    await page.locator("tbody").waitFor();

    const tableallOrderRows = page.locator("tbody tr");

    const rowCount = await tableallOrderRows.count();

    console.log(rowCount);

    for (let k = 0; k < rowCount; k++) {

        const rowOrderId = await tableallOrderRows.nth(k).locator("th").textContent();

        console.log(rowOrderId);

        if(orderId.includes(rowOrderId))
        {
            await tableallOrderRows.nth(k).locator("button").first().click();
            break;
        }
    }

    const orderNum = await page.locator(".col-text").textContent();
    
    expect((orderId).includes(orderNum)).toBeTruthy();

});




