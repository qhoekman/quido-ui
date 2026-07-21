import { test, expect } from '@playwright/test'

test.describe('ColorPalette', () => {
  test('Default story renders 246 color swatches without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-color-palette--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('color-palette')).toBeVisible()
    await expect(frame.getByTestId('color-palette__square')).toHaveCount(
      22 * 11 + 4
    )

    expect(errors).toEqual([])
  })

  test('clicking a swatch selects it', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-color-palette--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const swatches = frame.getByTestId('color-palette__square')

    await swatches.nth(10).click()
    await expect(swatches.nth(10)).toHaveClass(/selected/)
  })
})
