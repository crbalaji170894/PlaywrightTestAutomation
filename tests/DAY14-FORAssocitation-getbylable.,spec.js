 /*1. Explicit association via  attribute

• 	The  points to the  of the input.
• 	Playwright sees the label text  and links it to the input.
• 	✅  works.

<label for="email">Email</label>
<input id="email" type="text">

2. Implicit association by nesting

- The input is inside the label.
- Playwright automatically associates the label text "Email" with that input.
- ✅ page.getByLabel('Email').fill('user@example.com') works.
<label>
  Email
  <input type="text">
</label>

 Why fill() Sometimes Fails
- If the <label> is not properly associated with the input:
<label>Email</label>
<input type="text">
- Here, the label and input are separate, with no for attribute and no nesting.
- Playwright cannot connect them.
- ❌ getByLabel('Email') won’t find the input → fill() fails.
- If multiple labels exist with the same text but only one is linked correctly, Playwright may not resolve the right one


// Works if label is properly associated
await page.getByLabel('Email').fill('user@example.com');

// If association is missing, use placeholder
await page.getByPlaceholder('Enter your email').fill('user@example.com');

// Or role-based locator
await page.getByRole('textbox', { name: 'Email' }).fill('user@example.com');*/
