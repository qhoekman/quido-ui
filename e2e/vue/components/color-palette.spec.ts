import { test, expect } from '@playwright/test'

test.describe('ColorPalette', () => {
  test('Default story renders 246 color swatches without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-color-palette--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-color-palette')).toBeVisible()
    await expect(frame.getByTestId('color-square')).toHaveCount(22 * 11 + 4)

    expect(errors).toEqual([])
  })

  test('clicking a swatch selects it and emits the value', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-color-palette--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const swatches = frame.getByTestId('color-square')

    await swatches.nth(10).click()
    await expect(swatches.nth(10)).toHaveClass(/selected/)
    await expect(frame.getByText('Selected:', { exact: false })).toBeVisible()
  })

  test('WithSelectedColor story pre-selects the given color', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-color-palette--with-selected-color'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('.color-square.selected')).toHaveCount(1)
  })
})
