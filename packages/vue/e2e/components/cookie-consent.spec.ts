import { test, expect } from '@playwright/test'

const STORY_URL =
  'http://localhost:6006/?path=/story/components-feedback-cookie-consent--default'

test.describe('Cookie Consent', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STORY_URL)
    await page.frameLocator('#storybook-preview-iframe').locator('body').evaluate(() => {
      window.localStorage.removeItem('cookieConsent')
    })
  })

  test('shows the banner when no consent is stored yet, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.reload()
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-cookie-consent')).toBeVisible()
    await expect(frame.getByText('Cookie Consent')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: clicking Accept hides the banner and persists consent across reload', async ({
    page
  }) => {
    await page.reload()
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('qui-cookie-consent-accept').click()
    await expect(frame.getByTestId('qui-cookie-consent')).toHaveCount(0)

    const stored = await frame.locator('body').evaluate(() => window.localStorage.getItem('cookieConsent'))
    expect(stored).toBe('accepted')

    await page.reload()
    await expect(frame.getByTestId('qui-cookie-consent')).toHaveCount(0)
  })

  test('clicking Reject hides the banner and persists rejection', async ({ page }) => {
    await page.reload()
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('qui-cookie-consent-reject').click()
    await expect(frame.getByTestId('qui-cookie-consent')).toHaveCount(0)

    const stored = await frame.locator('body').evaluate(() => window.localStorage.getItem('cookieConsent'))
    expect(stored).toBe('rejected')
  })

  test('clicking the close (X) button also dismisses via reject', async ({ page }) => {
    await page.reload()
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('qui-cookie-consent-close').click()
    await expect(frame.getByTestId('qui-cookie-consent')).toHaveCount(0)

    const stored = await frame.locator('body').evaluate(() => window.localStorage.getItem('cookieConsent'))
    expect(stored).toBe('rejected')
  })
})
