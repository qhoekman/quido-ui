import { test, expect } from '@playwright/test'

test.describe('ColorPicker', () => {
  test('Default story renders the color wheel and info panel without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-color-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-color-picker')).toBeVisible()
    await expect(frame.getByTestId('qui-color-picker-info')).toContainText('#000000')
    await expect(frame.getByTestId('qui-color-picker-info')).toContainText('rgb(0, 0, 0)')

    expect(errors).toEqual([])
  })

  test('WithInitialColor story correctly parses a hex color despite the internal HSL hint', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-color-picker--with-initial-color'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    // #3b82f6 round-trips through HSL to #3c83f6 (tiny rounding, not a parse failure)
    await expect(frame.getByTestId('qui-color-picker-info')).toContainText('#3c83f6')
    await expect(frame.getByTestId('qui-color-picker-info')).toContainText('rgb(60, 131, 246)')
  })

  test('WithCSSVariable story resolves the CSS variable to its computed color', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-color-picker--with-css-variable'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-color-picker-info')).toContainText('#3c83f6')
  })

  test('switching to the Palette tab shows the color palette grid', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-color-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('qui-color-picker-tabs-trigger').filter({ hasText: 'Palette' }).click()
    await expect(frame.getByTestId('qui-color-palette')).toBeVisible()
  })
})
