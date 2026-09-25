import { test as base, expect } from '@playwright/test';

// Create a custom test fixture that extends the base Playwright test
export const test = base.extend<{}>({});

// Export the expect assertion library for use in tests
export { expect };