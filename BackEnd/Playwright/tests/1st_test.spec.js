const {test, expect} = require ('@playwright/test')

// Create a test
test('My first test', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Gooogle');
})