//codegen https://rahulshettyacademy.com/client/#/auth/login
//npx playwright codegen  https://rahulshettyacademy.com/client/#/auth/login

Record









Target:

Test Runner


1
import { test, expect } from '@playwright/test';
2
​
3
test('test', async ({ page }) => {
4
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
5
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
6
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('balaji.ravichandran@gmail.com');
7
  await page.getByRole('textbox', { name: 'email@example.com' }).press('Tab');
8
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('ravi@121A');
9
  await page.getByRole('button', { name: 'Login' }).click();
10
  await page.getByRole('button', { name: 'Login' }).click();
11
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
12
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
13
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
14
  await page.getByRole('textbox', { name: 'enter your passsword' }).press('ControlOrMeta+a');
15
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('test@121A');
16
  await page.getByRole('textbox', { name: 'enter your passsword' }).press('Enter');
17
  await page.getByRole('button', { name: 'Login' }).click();
18
  await page.getByText('ZARA COAT').click();
19
});
