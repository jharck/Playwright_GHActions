import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://qa-u20-tor11.netsapiens.com/portal/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Manager Portal/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://qa-u20-tor11.netsapiens.com/portal/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Are you a new user?' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'New Video' })).toBeVisible();
});
