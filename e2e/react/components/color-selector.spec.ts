import { test, expect } from '@playwright/test'

test.describe('ColorSelector', () => {
  test('Default story renders 5 color swatches, none selected', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto(
      '?path=/story/features-ecommerce-components-color-selector--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('color-selector')).toBeVisible()
    await expect(frame.getByTestId('color-selector__items')).toBeVisible()
    await expect(
      frame.locator('[data-testid^="color-selector__item-"]')
    ).toHaveCount(5)
    await expect(frame.getByTestId('color-selector__item-blue')).toHaveAttribute(
      'data-state',
      'unchecked'
    )

    expect(errors).toEqual([])
  })

  test('clicking a swatch selects it', async ({ page }) => {
    await page.goto(
      '?path=/story/features-ecommerce-components-color-selector--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('color-selector__item-blue').click()
    await expect(frame.getByTestId('color-selector__item-blue')).toHaveAttribute(
      'data-state',
      'checked'
    )
    await expect(frame.getByTestId('color-selector__item-red')).toHaveAttribute(
      'data-state',
      'unchecked'
    )
  })
})
