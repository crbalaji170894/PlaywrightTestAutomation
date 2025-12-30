const { test, expect } = require('@playwright/test');

test("Navigation Test", async ({ page }) => {
    await page.goto("https://www.google.com/");

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await page.goBack();

    await page.goForward();

    await expect(page.locator("#displayed-text")).toBeVisible();

    //then  hide it

    await page.locator("#hide-textbox").click();

    await expect(page.locator("#displayed-text")).toBeHidden();

});

test.only("Alerts/poppus/dialogs", async ({ page }) => {
    

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    page.pause();

    page.on('dialog',dialog => dialog.accept());

    await page.locator("#confirmbtn").click();

  //   page.on('dialog',dialog => dialog.dismiss());

   //mousehover handling

   await page.locator("#mousehover").hover();


});

test.only("Frames", async ({ page }) => {
    

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");



    const newFrmaePage = page.frameLocator("#courses-iframe"); // Swtiching into new frames

       page.pause();

});


