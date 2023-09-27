import puppeteer from 'puppeteer';

jest.setTimeout(50000);

describe('popover', () => {
  const baseUrl = 'http://localhost:9000';
  let browser;
  let page;

  beforeEach(async () => {
    try {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        devtools: true,
      });
    } catch (e) {
      console.error(e);
    }

    page = await browser.newPage();
  });

  test('should add .wg-tip__popup', async () => {
    await page.goto(baseUrl);
    const container = await page.$('.wg-search__col_date');
    const btn = await container.$('#popup-to');
    btn.click();
    await page.waitForSelector('.wg-tip__popup');
  });

  afterEach(async () => {
    if (browser) {
      await browser.close();
    }
  });
});
