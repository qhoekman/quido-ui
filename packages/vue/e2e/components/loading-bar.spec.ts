import { test, expect } from '@playwright/test'

test.describe('Loading Bar', () => {
  test('Default story renders the indicator with the indeterminate animation, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-feedback-loading-bar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const bar = frame.getByTestId('qui-loading-bar')
    const indicator = bar.locator('.indicator')

    await expect(bar).toBeVisible()
    await expect(indicator).toBeVisible()
    const animationName = await indicator.evaluate((el) => getComputedStyle(el).animationName)
    expect(animationName).toContain('indeterminate')

    expect(errors).toEqual([])
  })

  test('loading=false renders the bar without the indicator', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-feedback-loading-bar--default&args=loading:false'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-loading-bar')).toBeVisible()
    await expect(frame.locator('.indicator')).toHaveCount(0)
  })
})
