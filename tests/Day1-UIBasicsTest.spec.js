const{test} = require('@playwright/test');

// Import playwright annotation very initally

//These tests are executed in Playwright environment that launches the browser and provides a fresh page to each test.

test("My First Playwright Test", function(){

});

//JAVA Script code will be executed in Asynchronous
//To make it sequntail test execution we have mention each steps  keyword called await
// if we mention await keyword need to metion async function, then only await keyword will be activated


test("My First Playwright Test1", async function(){



});


test("My First Playwright Test2", async ()=>{

// to create anonymous function

});


// To make it simple We use anonymous function using fat operator
 //npx playwright test --headed --ui
// 