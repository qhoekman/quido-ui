import { test, expect } from '@playwright/test'

test.describe('Progress Bar', () => {
  test('Default story renders a determinate bar positioned at the given value, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-feedback-progress-bar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const indicator = frame.getByTestId('qui-progress-bar-indicator')

    await expect(indicator).toBeVisible()
    await expect(indicator).toHaveClass(/variant--determinate/)
    await expect(indicator).toHaveAttribute('style', /translateX\(-50%\)/)

    expect(errors).toEqual([])
  })

  test('Indeterminate story applies the indeterminate sweep animation', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-feedback-progress-bar--indeterminate'
    )
    const indicator = page
      .frameLocator('#storybook-preview-iframe')
      .getByTestId('qui-progress-bar-indicator')

    await expect(indicator).toHaveClass(/variant--indeterminate/)
    const animationName = await indicator.evaluate((el) => getComputedStyle(el).animationName)
    expect(animationName).toContain('indeterminate')
  })

  test('regression: value prop correctly maps to translateX(value - 100%)', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-feedback-progress-bar--default')
    const indicator = page
      .frameLocator('#storybook-preview-iframe')
      .getByTestId('qui-progress-bar-indicator')

    const valueSlider = page.locator('input[type="range"]')
    await valueSlider.fill('0')
    await expect(indicator).toHaveAttribute('style', /translateX\(-100%\)/)

    await valueSlider.fill('100')
    await expect(indicator).toHaveAttribute('style', /translateX\(0%\)/)
  })
})
