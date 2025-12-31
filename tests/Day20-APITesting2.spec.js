//Create Order with API call

const { test, expect, request } = require('@playwright/test');

//test.beforAll() - to  before executing actual test this will execute firrt (only one excute before all test)

//test.beforeEach()-  lets say we have 3 test cases execute this code befor each test

//request is helping to handle all API related methods  

const jsonLoginPayload = {
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


//Go to View in url see the prodcut orderid

let sessionToken;

let orderID;
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

    //-------------

    //Create Order

    const createOrderRepsone = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {data: orderPayload,
            headers:{
                'Authorization': sessionToken,
                'Content-Type' : 'application/json'
            },
        }
    )

    await expect(createOrderRepsone.ok()).toBeTruthy();

    const oderJson = await createOrderRepsone.json();

    console.log(oderJson)

    orderID = oderJson.orders[0];


});

test("Create Order using API calls", async ({ page }) => {

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

    //Go to Orders

    await page.locator('button[routerlink="/dashboard/myorders"]').click();

    await page.pause();

    //WebTable

    await page.locator("tbody").waitFor();

    const tableallOrderRows = page.locator("tbody tr");

    const rowCount = await tableallOrderRows.count();

    console.log( rowCount);

    for (let k = 0; k < rowCount; k++) {

        const rowOrderId = await tableallOrderRows.nth(k).locator("th").textContent();

        console.log(rowOrderId);

        if(orderID.includes(rowOrderId))
        {
            await tableallOrderRows.nth(k).locator("button").first().click();
            break;
        }
    }

    const orderNum = await page.locator(".col-text").textContent();
    
    expect((orderID).includes(orderNum)).toBeTruthy();



});




