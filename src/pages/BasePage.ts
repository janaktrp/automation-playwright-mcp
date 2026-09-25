import { Page } from '@playwright/test';

// Base class for common functionality shared by all page objects
export abstract class BasePage {
    // Stores the Playwright Page instance for use by child page classes
    protected readonly page: Page;

    // Initializes the BasePage with the  Page instance
    constructor(page: Page) {
        this.page = page;
    }

    //**** Methods  *//

    // abstract goto(): Promise<void>;
    // each page may not be navigable, so we don't enforce a goto method in the base class
    async waitForReady(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }
}