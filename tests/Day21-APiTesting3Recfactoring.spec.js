//Refactoring the above class files using class method and constructor

const { test, expect, request } = require('@playwright/test');

//Import APIUtils class here

const {APIUtils} = require('../utils/APIUtils');

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

// to get the repsone from create order method so creating variable

let response;

test.beforeAll(async () => {

    const apiContext = await request.newContext();

    // call the class which has constructor (create a Object for the class)

    const apiUtils = new APIUtils(apiContext, loginPayload);

    response =  await apiUtils.createOrder(orderPayload); 


});

test("Create Order using API calls", async ({ page }) => {

    //value is any variable name

    await page.addInitScript(value => { window.localStorage.setItem('token', value); }, response.sessionToken);

    await page.goto("https://rahulshettyacademy.com/client/");

    //Go to Orders

    await page.locator('button[routerlink="/dashboard/myorders"]').click();

    //WebTable

    await page.locator("tbody").waitFor();

    const tableallOrderRows = page.locator("tbody tr");

    const rowCount = await tableallOrderRows.count();

    console.log( rowCount);

    for (let k = 0; k < rowCount; k++) {

        const rowOrderId = await tableallOrderRows.nth(k).locator("th").textContent();

        console.log(rowOrderId);

        if(response.orderID.includes(rowOrderId))
        {
            await tableallOrderRows.nth(k).locator("button").first().click();
            break;
        }
    }

    const orderNum = await page.locator(".col-text").textContent();
    
    expect((response.orderID).includes(orderNum)).toBeTruthy();



});




