import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

// Represents the Inventory page and inherits functionality from BasePage
export class InventoryPage extends BasePage {

    readonly productsHeading: Locator;

    // Initializes the InventoryPage with the Playwright Page instance
    constructor(page: Page) {

        super(page);    // Calls the BasePage constructor and passes the Page instance to it

        // Locator
        this.productsHeading = page.getByText('Products', { exact: true });
    }

    // Navigates to the Inventory page
    async goto(): Promise<void> {
        await this.page.goto('urls.sauceDemoInventoryUrl');
    }
}