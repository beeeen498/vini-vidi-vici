import { test, expect } from "@playwright/test";

test("user can navigate to the menu page", async ({ page }) => {
  await page.goto("/");

  // click the Menu link in the nav (exact, so it doesn't match "our menu")
  await page.getByRole("link", { name: "Menu", exact: true }).click();

  await expect(page).toHaveURL(/\/menu/);
  await expect(page.getByRole("heading", { name: "OUR MENU" })).toBeVisible();
});

test("menu category selector scrolls to a section", async ({ page }) => {
  await page.goto("/menu");

  const before = await page.evaluate(() => window.scrollY);

  await page.getByRole("button", { name: "Pasta" }).click();

  // wait for the page to have scrolled down from where it started
  await expect
    .poll(() => page.evaluate(() => window.scrollY), { timeout: 10000 })
    .toBeGreaterThan(before);
});
