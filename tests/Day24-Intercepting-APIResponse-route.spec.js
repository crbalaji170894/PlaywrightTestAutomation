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

test("Create Order using API calls", async ({ page }) => {

    //value is any variable name

    await page.addInitScript(value => { window.localStorage.setItem('token', value); }, response.sessionToken);

    await page.goto("https://rahulshettyacademy.com/client/");

    //page.route

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            //Fetch the Reposnse using rote .request
            const APIrepsonse = await page.request.fetch(route.request());

            let body = JSON.stringify(fakePayLoadOrders); // convert Javascroipt object to JSON

            //route.fullfill -> fulllfill t get the full api respons from route.request

            route.fulfill({
                response,
                    body
            });
        });

    //Go to Orders

    await page.locator('button[routerlink="/dashboard/myorders"]').click();

    //once after clicking the orders pages we need wat for reposne belwo request url ** (mandatory)

    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")

    console.log(await page.locator(".mt-4").textContent());


});

