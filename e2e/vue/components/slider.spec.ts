import { test, expect } from '@playwright/test'

test.describe('Slider', () => {
  test('Default story renders the thumb at its initial value, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-slider--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const thumb = frame.locator('.q-slider-thumb')

    await expect(frame.locator('.q-slider-track')).toBeVisible()
    await expect(thumb).toHaveAttribute('aria-valuenow', '50')

    expect(errors).toEqual([])
  })

  test('regression: arrow keys move the thumb and emit an updated value (modelValue wiring)', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-slider--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const thumb = frame.locator('.q-slider-thumb')

    const consoleLogs: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'log') consoleLogs.push(msg.text())
    })

    await thumb.focus()
    await page.keyboard.press('ArrowRight')

    await expect(thumb).toHaveAttribute('aria-valuenow', '60')
    await expect.poll(() => consoleLogs.some((log) => log.includes('60'))).toBe(true)
  })

  test('disabled prop makes the thumb non-interactive', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-slider--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const thumb = frame.locator('.q-slider-thumb')

    await expect(thumb).toHaveAttribute('data-disabled', '')
    await expect(thumb).not.toHaveAttribute('tabindex')
  })
})
