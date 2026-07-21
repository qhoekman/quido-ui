import { test, expect } from '@playwright/test'

test.describe('ColorPicker', () => {
  test('Default story renders the color wheel and info panel without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-color-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('color-picker')).toBeVisible()
    await expect(frame.getByTestId('color-picker__info')).toContainText(
      '#000000'
    )
    await expect(frame.getByTestId('color-picker__info')).toContainText(
      'rgb(0, 0, 0)'
    )

    expect(errors).toEqual([])
  })

  test('switching to the Palette tab shows the color palette grid', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-color-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame
      .getByTestId('color-picker__tabs-trigger')
      .filter({ hasText: 'Palette' })
      .click()
    await expect(frame.getByTestId('color-palette')).toBeVisible()
  })
})
