import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { InventoryPage } from './InventoryPage';
import { HomePage } from './HomePage';

export class LoginPage extends BasePage {

    // Locators for the login page elements
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly emailInput: Locator;
    readonly pwInput: Locator;
    readonly loginButton2: Locator;

    // Initializes the LoginPage with the Playwright Page instance 
    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        // For automationexercise.com login page
        this.emailInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.pwInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton2 = page.getByRole('button', { name: 'Login' });

    }

    // Navigates to the login page
    async gotoSauceDemoSite(): Promise<void> {
        await this.page.goto('urls.sauceDemoUrl');
    }

    //*** automationexercise   page interactions */

    async gotoAutomationExercise(): Promise<void> {
        await this.page.goto('urls.automationExerciseUrl');
    }

    //********* */ Functions to perform actions on page  ************//

    async customerLogin(username: string, password: string): Promise<HomePage> {
        await this.emailInput.fill(username);
        await this.pwInput.fill(password);
        await this.loginButton2.click();
        return new HomePage(this.page);
    }

    // async method that returns an instance of the InventoryPage class after performing a login action
    async login(username: string, password: string): Promise<InventoryPage> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        return new InventoryPage(this.page);
    }
}