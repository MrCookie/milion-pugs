import { test, expect } from '@playwright/test';

const imagesUrls = ['1', '2', '3'];

test('ImageViewer', async ({ page }) => {
  test.beforeEach(async ({ context }) => {
    await context.route(/nasa/, route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({
          url: imagesUrls.pop(),
        }),
      }),
    );
  });
  await page.goto('http://localhost:3000');

  // Test spinner
  test.only('Loader', async () => {
    const loaderElem = await page.$('.loaderWrapper');
    const isVisible = await loaderElem?.isVisible();
    expect(isVisible).toBeTruthy();
  });

  // Test first image
  test('First image', async () => {
    const firstImage = await await page.$('.imageWrapper');
    const imageUrl = await firstImage?.getAttribute('style');
    expect(imageUrl).toEqual(`background-image: url("1")`);
  });

  await page.click('button#nextBtn');
  await page.$('.loaderWrapper');

  test('Second image', async () => {
    const firstImage = await await page.$('.imageWrapper');
    const imageUrl = await firstImage?.getAttribute('style');
    expect(imageUrl).toEqual(`background-image: url("2")`);
  });
});
