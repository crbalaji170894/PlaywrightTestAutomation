//E2E Project

//https://rahulshettyacademy.com/client/#/auth/login 

// register login infromation

//login with credentials, select a product add it cart,( dynamically pass the product name)

//Then go to cart section, items are displayed in cart sections do assertions

// Then Checkout verify the same product and enter ducmmy credit card details

//verify login email id, select country

// apply coupon rahulshettyacadeemy

//reach the  order confirmation page

// capture the order id, find the order id in dynamic table verify and assertions


const { test, expect } = require('@playwright/test');


test("ClientApp Login teo Fetch all the text contents using wait mechnism", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const username = page.locator('#userEmail');

    const password = page.locator('#userPassword');

    const button = page.locator('#login');

    await username.fill("test");

    await username.fill("");  // wipe existing text clear the  text

    await username.fill("balaji.ravichandran@gmail.com");

    await password.type("test@121A");

    await button.click();

    //Login Completed

    //await page.waitForLoadState('networkidle');

    await page.locator('.card-body b').last().waitFor();

    const allProductsElements = page.locator('.card-body');

    const allTitles = await page.locator('.card-body b').allTextContents();

    console.log(allTitles)

    //print all titles 

    // to get all titiles wait for  load state until all netowrk calls gets finished

    // ADIDAS ORIGINAL Do add to cart this product


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

    console.log(    rowCount);

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

    await page.pause(); // to see add to cart has happened or not
});