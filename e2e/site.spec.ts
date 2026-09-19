import { test, expect } from "@playwright/test";

test("loads with the expected title and OG metadata", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Isaiah Ofalt/);

  const ogImage = page.locator('meta[property="og:image"]');
  await expect(ogImage).toHaveAttribute("content", /og-image\.png/);
});

test("every nav link scrolls to its matching section", async ({ page }) => {
  await page.goto("/");

  for (const { name, id } of [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ]) {
    await page.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});

test("the sticky header stays visible after navigating to any section", async ({ page }) => {
  await page.goto("/");
  const header = page.locator("header");

  for (const name of ["Skills", "Experience", "Contact"]) {
    await page.getByRole("link", { name, exact: true }).click();
    await expect(header).toBeInViewport();
  }
});

test("resume PDF is downloadable and served as a PDF", async ({ page, request }) => {
  await page.goto("/");
  const resumeLink = page.getByRole("link", { name: "Download resume" });
  await expect(resumeLink).toHaveAttribute("href", "/Isaiah-Ofalt-Resume.pdf");

  const response = await request.get("/Isaiah-Ofalt-Resume.pdf");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
});

test("dark mode toggle actually changes the rendered background color", async ({ page }) => {
  await page.goto("/");
  const before = await page.evaluate(
    () => getComputedStyle(document.body).backgroundColor
  );

  await page.getByLabel("Toggle color mode").click();

  await expect(async () => {
    const after = await page.evaluate(
      () => getComputedStyle(document.body).backgroundColor
    );
    expect(after).not.toBe(before);
  }).toPass();
});

test("references are not present anywhere on the public site", async ({ page }) => {
  await page.goto("/");
  const bodyText = await page.locator("body").innerText();
  expect(bodyText).not.toContain("Shabeen Jafri");
  expect(bodyText).not.toContain("Robert Goble");
  expect(bodyText).not.toContain("Dario Richards");
});
