import { test, expect } from '../../src/fixtures/base';
import { LoginPage } from '../../src/pages/LoginPage';
import users from '../data/users.json';


test.describe('Login for users', () => {


    // Test case to verify successful login with a standard user    
    test('standard user login @smoke @critical', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Navigate to the login page and perform login with standard user credentials
        await loginPage.goto();
        const inventoryPage = await loginPage.login(users.standard.username, users.standard.password);

        // Verify that the user is redirected to the inventory page and the products heading is visible
        await expect(page).toHaveURL(/\/inventory\.html$/);
        await expect(inventoryPage.productsHeading).toBeVisible();
        await expect(loginPage.loginButton).not.toBeVisible();
    });

    test('customer login', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Navigate to the login page and perform login with standard user credentials
        await loginPage.goto();
        const inventoryPage = await loginPage.login(users.standard.username, users.standard.password);

        // Verify that the user is redirected to the inventory page and the products heading is visible
        await expect(page).toHaveURL(/\/inventory\.html$/);
        await expect(inventoryPage.productsHeading).toBeVisible();
        await expect(loginPage.loginButton).not.toBeVisible();
    });


});