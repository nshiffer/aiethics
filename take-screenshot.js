// Screenshot generator for README
// Install puppeteer first: npm install puppeteer

const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a desktop size
  await page.setViewport({
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
  });

  // Navigate to the local development server
  console.log('Navigating to the development server...');
  await page.goto('http://localhost:5173/', {
    waitUntil: 'networkidle2',
  });

  // Wait a bit for any animations to complete
  await page.waitForTimeout(2000);

  // Take the screenshot
  console.log('Taking screenshot...');
  await page.screenshot({
    path: 'screenshot.png',
    fullPage: false,
  });

  await browser.close();
  console.log('Screenshot saved as screenshot.png');
})(); 