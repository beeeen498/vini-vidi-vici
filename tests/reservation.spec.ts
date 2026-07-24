import { test, expect } from "@playwright/test";

test("user can submit a reservation and see confirmation", async ({ page }) => {
  // go to homepage
  await page.goto("/");

  // scroll to the reserve section
  await page.locator("#reserve").scrollIntoViewIfNeeded();

  // select party size
  await page.selectOption("#partySize", "2");

  // pick a date (opens the datepicker and selects a future day)
  await page.click(".react-datepicker__input-container input");
  await page.click(".react-datepicker__navigation--next"); // go to next month
  await page.click(".react-datepicker__day--015"); // pick the 15th

  // select a time
  await page.selectOption("#reservationTime", "20:00");

  // submit
  await page.click('button[type="submit"]');

  // check the toast appears
  await expect(page.getByText("Reservation confirmed!")).toBeVisible();
});
