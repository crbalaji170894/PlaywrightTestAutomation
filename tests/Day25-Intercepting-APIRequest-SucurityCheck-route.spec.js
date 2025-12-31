// Refer Day 21 code

//Refactoring the above class files using class method and constructor

const { test, expect, request } = require('@playwright/test');

//Import APIUtils class here

const { APIUtils } = require('../utils/APIUtils');

const loginPayload = {
    userEmail: "balaji.ravichandran@gmail.com",
    userPassword: "test@121A"
}

const orderPayload = {
    orders: [
        {
            country: "India",
            productOrderedId: "68a961719320a140fe1ca57c"
        }
    ]
};

const fakePayLoadOrders = { data: [], message: "No Orders" };

// to get the repsone from create order method so creating variable

let response;

test.beforeAll(async () => {

    const apiContext = await request.newContext();

    // call the class which has constructor (create a Object for the class)

    const apiUtils = new APIUtils(apiContext, loginPayload);

    response = await apiUtils.createOrder(orderPayload);


});

// route is used to intecept or mocking the reposne 

// UI  event example click my orders -Backend API call ->API Resposne- > sends to broswer Renderd format with UI details.

// Here we intercepting Reposne  once we get the API reposne and Mocking our API repose and geeting fake rendered UI details

//page.route helps to intercepting

//Note page.route steps need to write before performing the API call

test("Security test case ", async ({ page }) => {

    //value is any variable name

    await page.addInitScript(value => { window.localStorage.setItem('token', value); }, response.sessionToken);

    await page.goto("https://rahulshettyacademy.com/client/");

    await page.locator('button[routerlink="/dashboard/myorders"]').click();

    //Before Clicking the view Button we need to define route it

    // To Intercepting the request to verify security checks

    // continiue method

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
      
        async route => route.continue(
            {url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=12345"})

    )

    

    //WebTable

    //await page.locator("tbody").waitFor();

    //await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");

    // const tableallOrderRows = page.locator("tbody tr");

    // const rowCount = await tableallOrderRows.count();

    // console.log( rowCount);

    // for (let k = 0; k < rowCount; k++) {

    //     const rowOrderId = await tableallOrderRows.nth(k).locator("th").textContent();

    //     console.log(rowOrderId);

    //     if(response.orderID.includes(rowOrderId))
    //     {
    //         await tableallOrderRows.nth(k).locator("button").first().click();
    //         break;
    //     }
    // }


});
