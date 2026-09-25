import { test, expect } from '../src/fixtures/base';


// This test suite is designed to verify the baseline functionality of the SauceDemo login page
test.describe('Seed — environment baseline @smoke', () => {
  test('SauceDemo login page loads', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  });
});