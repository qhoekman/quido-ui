import { test, expect } from '@playwright/test'

test.describe('ColorSelect', () => {
  test('Default story renders swatches with the first pre-selected, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-color-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('color-select__item')

    await expect(items).toHaveCount(3)
    await expect(items.first()).toHaveAttribute('data-state', 'checked')
    await expect(items.first()).toHaveAttribute('aria-checked', 'true')

    expect(errors).toEqual([])
  })

  test('clicking a swatch selects it and unselects the previous one', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-color-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('color-select__item')

    await items.nth(2).click()
    await expect(items.nth(2)).toHaveAttribute('data-state', 'checked')
    await expect(items.first()).toHaveAttribute('data-state', 'unchecked')
  })
})
