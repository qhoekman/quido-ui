import { test, expect } from '@playwright/test'

test.describe('BackToTop', () => {
  test('Default story loads without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-actions-back-to-top--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('qui-back-to-top')).toBeAttached()

    expect(errors).toEqual([])
  })

  test('is hidden until scrolled, then scrolls back to top on click', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/iframe.html?id=components-actions-back-to-top--default&viewMode=story'
    )
    const trigger = page.getByTestId('qui-back-to-top')

    await expect(trigger).toBeEmpty()

    await page.mouse.wheel(0, 2000)
    await expect(trigger.getByText('Back to Top')).toBeVisible()

    await trigger.click()
    await expect(trigger).toBeEmpty()
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
  })
})
