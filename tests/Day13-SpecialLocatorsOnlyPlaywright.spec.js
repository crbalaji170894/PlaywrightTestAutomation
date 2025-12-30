//getByLabel()
//getByRole()
//getByLinks()
//getByPlaceHolder()
//https://rahulshettyacademy.com/angularpractice/
/*- getByRole() → Finds elements by their ARIA role (button, link, heading, etc.)
Example: page.getByRole('button', { name: 'Submit' })
- getByText() → Locates elements by visible text content
Example: page.getByText('Welcome back')
- getByLabel() → Targets form controls by their associated <label> text
Example: page.getByLabel('Email')
- getByPlaceholder() → Finds input fields by placeholder text
Example: page.getByPlaceholder('Enter your password')
- getByAltText() → Locates elements (usually images) by their alt attribute
Example: page.getByAltText('Company logo')
- getByTitle() → Finds elements by their title attribute
Example: page.getByTitle('Close')
- getByTestId() → Targets elements by data-testid (or custom attribute configured in Playwright)
Example: page.getByTestId('login-button')
*/

const { test, expect } = require('@playwright/test');


test("SpecialLocators", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel("Check me out if you Love IceCreams!").click();

    await page.getByLabel("Employed").check();

    //click() alos witll work

    await page.getByLabel("Gender").selectOption("Female");

    // getByLabel will work radio buttons, dropdowsnm checkboxes

    //getBPlaceHolder

    //it can be used in where we have placeholder attribute

    await page.getByPlaceholder("Password").fill("Abc@123");

    //GetByRole()
    // Playwirght has many predefined roles are available

    //await page.getByRole('text', { name: 'email' }).fill('user@example.com');
    await page.getByRole("button", {name:"Submit"}).click();

        //it fecthes all the button webelements in the particular page
    //second argument is passing name of the button
    // no need to pass second argument if only one button is present

    //getByText()

    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //link click using role

    await page.getByRole("link",{name: "Shop"}).click();


    //takes all the text weblements from the particular webpage

    //isvisible returns boolean checks is visible text

    //omce after clicking the link it goes to neew page

    //from that i need to addcart particulr product

    await page.locator("app-card").filter({hasText:"Samsung Note 8"}).getByRole("button").click();






    

    await page.pause();

    //Scope Type or Fill or TextBox


});


