const { test, expect } = require("@playwright/test");


test("Calendar validations", async ({ page }) => {

    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber, date, year];

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    await page.locator(".react-date-picker__inputGroup").click();

    await page.locator(".react-calendar__navigation__label__labelText--from").click();

    await page.locator(".react-calendar__navigation__label__labelText").click();


    await page.getByText(year).click();

    await page.locator(".react-calendar__tile").nth(Number(monthNumber) - 1).click();

    await page.locator("//abbr[text()='" + date + "']").click();

    //Assertions to check expected date is choosen or not 

    // create a List which has month date year

    // take common webelemnt to iterate till end of list size

    const inputs = page.locator(".react-date-picker__inputGroup__input ")

    for (let i = 0; i < expectedList.length; i++) {
        const value = await inputs.nth(i).getAttribute("value");
        //const value = await inputs.nth(i).inputValue();
        console.log(value);

        expect(value).toEqual(expectedList[i]);
        //getAttributeValue also we can use

    }

    await page.pause();



});
