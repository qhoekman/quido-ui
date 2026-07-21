import { test, expect } from '@playwright/test'

test.describe('Progress Bar', () => {
  test('Default story renders a determinate bar positioned at the given value, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-feedback-progress-bar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const indicator = frame.getByTestId('progress-bar__indicator')

    await expect(indicator).toBeVisible()
    await expect(indicator).toHaveClass(/variant--determinate/)
    await expect(indicator).toHaveCSS('transform', /matrix/)

    expect(errors).toEqual([])
  })

  test('Indeterminate story applies the indeterminate sweep animation', async ({ page }) => {
    await page.goto(
      '?path=/story/components-feedback-progress-bar--indeterminate'
    )
    const indicator = page
      .frameLocator('#storybook-preview-iframe')
      .getByTestId('progress-bar__indicator')

    await expect(indicator).toHaveClass(/variant--indeterminate/)
    const animationName = await indicator.evaluate(
      (el) => getComputedStyle(el).animationName
    )
    expect(animationName).toContain('indeterminate')
  })

  test('regression: value prop correctly maps to translateX(value - 100%)', async ({ page }) => {
    await page.goto(
      '?path=/story/components-feedback-progress-bar--default&args=value:0'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const indicator = frame.getByTestId('progress-bar__indicator')

    const transformAt0 = await indicator.evaluate(
      (el) => (el as HTMLElement).style.transform
    )
    expect(transformAt0).toBe('translateX(-100%)')

    await page.goto(
      '?path=/story/components-feedback-progress-bar--default&args=value:100'
    )
    const transformAt100 = await indicator.evaluate(
      (el) => (el as HTMLElement).style.transform
    )
    expect(transformAt100).toBe('translateX(0%)')
  })
})
