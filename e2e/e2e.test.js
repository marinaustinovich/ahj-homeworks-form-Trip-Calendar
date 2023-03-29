import puppetteer from 'puppeteer'; // eslint-disable-line import/no-extraneous-dependencies
import { fork } from 'child_process';

jest.setTimeout(50000); // default puppeteer timeout

describe('popover', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add .wg-tip__popup', async () => {
    await page.goto(baseUrl);
    const container = await page.$('.wg-search__col_date');
    const btn = await container.$('#popup-to');
    btn.click();
    await page.waitForSelector('.wg-tip__popup');
  });

  test('should add .wg-datepicker', async () => {
    await page.goto(baseUrl);
    const container = await page.$('.wg-search__col_date');
    const btn = await container.$('.wg-icon_calendar');
    btn.click();
    await page.waitForSelector('.wg-datepicker');
  });
});
