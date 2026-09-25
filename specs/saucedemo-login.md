# Test Plan: SauceDemo Login

**Target:** https://www.saucedemo.com
**Seed:** tests/seed.spec.ts
**Date:** 2026-09-07

## Overview
Verify the SauceDemo login flow for successful authentication, locked-user rejection, empty-field validation, and invalid credentials. Each scenario starts from a fresh login page and uses `secret_sauce` for every password entry.

## Preconditions
- The test environment can reach `https://www.saucedemo.com`.
- Each scenario starts on the login page with no authenticated session.
- Accessible `Username` and `Password` fields and a `Login` button are visible.

## Scenarios

### Scenario 1.1 - Standard user successful login
- **Priority:** P0
- **Tags:** @smoke
- **Preconditions:** Fresh SauceDemo login page.
- **Steps:**
  1. Fill `Username` with `standard_user` - expected: the username is entered.
  2. Fill `Password` with `secret_sauce` - expected: the password remains masked.
  3. Activate `Login` - expected: the application navigates to the inventory page.
- **Assertions:**
  - The URL ends with `/inventory.html`.
  - A `Products` heading is visible.
  - The login form is no longer visible.
- **Edge cases considered:** Password masking and repeated submission should not cause duplicate navigation.

### Scenario 1.2 - Locked-out user shows locked error
- **Priority:** P0
- **Tags:** @regression
- **Preconditions:** Fresh SauceDemo login page.
- **Steps:**
  1. Fill `Username` with `locked_out_user` - expected: the username is entered.
  2. Fill `Password` with `secret_sauce` - expected: the password remains masked.
  3. Activate `Login` - expected: login remains on the login page and an error is displayed.
- **Assertions:**
  - `Epic sadface: Sorry, this user has been locked out.` is visible.
  - The inventory page is not opened.
- **Edge cases considered:** The locked-user error remains visible after the failed submission.

### Scenario 1.3 - Empty username submission
- **Priority:** P1
- **Tags:** @regression
- **Preconditions:** Fresh SauceDemo login page with empty fields.
- **Steps:**
  1. Leave `Username` empty.
  2. Fill `Password` with `secret_sauce` - expected: the password remains masked.
  3. Activate `Login` - expected: login is rejected with required-field validation.
- **Assertions:**
  - `Epic sadface: Username is required` is visible.
  - The user remains on the login page.
- **Edge cases considered:** Missing username is reported instead of a generic credential mismatch.

### Scenario 1.4 - Empty password submission
- **Priority:** P1
- **Tags:** @regression
- **Preconditions:** Fresh SauceDemo login page with empty fields.
- **Steps:**
  1. Fill `Username` with `standard_user` - expected: the username is entered.
  2. Leave `Password` empty.
  3. Activate `Login` - expected: login is rejected with required-field validation.
- **Assertions:**
  - `Epic sadface: Password is required` is visible.
  - The user remains on the login page.
- **Edge cases considered:** Missing password is reported instead of a generic credential mismatch.

### Scenario 1.5 - Invalid credentials
- **Priority:** P1
- **Tags:** @regression
- **Preconditions:** Fresh SauceDemo login page.
- **Steps:**
  1. Fill `Username` with `invalid_user` - expected: the username is entered.
  2. Fill `Password` with `secret_sauce` - expected: the password remains masked.
  3. Activate `Login` - expected: login remains on the login page and an error is displayed.
- **Assertions:**
  - `Epic sadface: Username and password do not match any user in this service` is visible.
  - The inventory page is not opened.
- **Edge cases considered:** Filled but unrecognized credentials produce a credential-mismatch error, not required-field validation.

## Not covered (and why)
- Logout and authenticated inventory workflows are outside the requested login flow.
- Other users, password variants, and network-failure behavior are outside the requested scenarios.