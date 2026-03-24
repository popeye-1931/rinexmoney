import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const outDir = path.resolve('audit-screenshots')

async function ensureDir() {
  await fs.mkdir(outDir, { recursive: true })
}

async function withHighlight(locator) {
  await locator.evaluate((element) => {
    const node = element
    node.setAttribute(
      'style',
      `${node.getAttribute('style') || ''}; outline: 4px solid #ff3b30; outline-offset: 6px; background: rgba(255, 245, 214, 0.9);`,
    )
  })
}

async function screenshotElement(locator, fileName) {
  await locator.waitFor({ state: 'visible', timeout: 15000 })
  await locator.scrollIntoViewIfNeeded()
  await withHighlight(locator)
  await locator.screenshot({ path: path.join(outDir, fileName) })
}

async function captureHomePage(page) {
  await page.goto('https://www.rinexmoney.in/', { waitUntil: 'networkidle' })

  await page.screenshot({
    path: path.join(outDir, '01-homepage-top-rbi-lender-claims.png'),
    clip: { x: 0, y: 0, width: 1440, height: 920 },
  })

  await screenshotElement(
    page.locator('.f-card').filter({ hasText: '24/7 Support' }).first(),
    '02-homepage-24x7-support-claim.png',
  )

  await screenshotElement(
    page.locator('.info-box').filter({ hasText: 'Netbanking Credentials' }).first(),
    '03-homepage-netbanking-credentials.png',
  )

  await screenshotElement(
    page.getByText('Support: +91 7066659051', { exact: false }).locator('xpath=../..'),
    '04-homepage-footer-support-hours-and-links.png',
  )

  await screenshotElement(
    page.locator('.f-disclaimer').first(),
    '05-homepage-footer-platform-disclaimer.png',
  )
}

async function captureLoginPage(page) {
  await page.goto('https://www.rinexmoney.in/login.html', { waitUntil: 'networkidle' })

  await screenshotElement(
    page.getByText('Manage your loan and EMI schedule', { exact: false }).locator('xpath=..'),
    '06-login-manage-loan-emi.png',
  )
}

async function main() {
  await ensureDir()

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1800 },
    deviceScaleFactor: 1,
  })

  const page = await context.newPage()

  try {
    await captureHomePage(page)
    await captureLoginPage(page)
  } finally {
    await browser.close()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
