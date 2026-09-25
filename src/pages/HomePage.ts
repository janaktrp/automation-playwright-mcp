import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

// Represents the Home page and inherits functionality from BasePage - for AutomationExercise.com
export class HomePage extends BasePage {

    readonly pageHeading: Locator;
    readonly homepageMenu_Home: Locator;
    readonly homepageMenu_Products: Locator;
    readonly homepageMenu_Cart: Locator;
    readonly homepageMenu_DeleteAccount: Locator;
    readonly homepageMenu_ApiTesting: Locator;
    readonly homepageMenu_Logout: Locator;


    // Initializes the HomePage with the Page instance
    constructor(page: Page) {

        super(page);    // Calls the BasePage constructor and passes the Page instance to it

        // Locator
        this.pageHeading = page.getByRole('link', { name: 'Website for automation' });
        this.homepageMenu_Home = page.getByRole('link', { name: 'Home' });
        this.homepageMenu_Products = page.getByRole('link', { name: 'Products' });
        this.homepageMenu_Cart = page.getByRole('link', { name: 'Cart' });
        this.homepageMenu_DeleteAccount = page.getByRole('link', { name: 'Delete Account' });
        this.homepageMenu_ApiTesting = page.getByRole('link', { name: 'API Testing' });
        this.homepageMenu_Logout = page.getByRole('link', { name: 'Logout' });
    }

    //******** */ Navigation metods on home page***********//

    async goto(): Promise<void> {
        await this.page.goto('urls.automationExerciseUrl');
    }

    async clickHome(): Promise<void> {
        await this.page.goto('urls.automationExerciseUrl');
    }

    async clickProducts(): Promise<void> {
        await this.homepageMenu_Products.click();
    }
    async clickCart(): Promise<void> {
        await this.homepageMenu_Cart.click();
    }
    async clickDeleteAccount(): Promise<void> {
        await this.homepageMenu_DeleteAccount.click();
    }
    async clickApiTesting(): Promise<void> {
        await this.homepageMenu_ApiTesting.click();
    }
    async clickLogout(): Promise<void> {
        await this.homepageMenu_Logout.click();
    }
}