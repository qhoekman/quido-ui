import { test, expect } from '@playwright/test'

test.describe('ColorSelect', () => {
  test('Default story renders swatches with defaultValue pre-selected, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-entry-color-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('qui-color-select-item')

    await expect(items).toHaveCount(6)
    await expect(items.first()).toHaveAttribute('data-state', 'checked')
    await expect(items.first()).toHaveAttribute('aria-checked', 'true')

    expect(errors).toEqual([])
  })

  test('clicking a swatch selects it and unselects the previous one', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-color-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('qui-color-select-item')

    await items.nth(2).click()
    await expect(items.nth(2)).toHaveAttribute('data-state', 'checked')
    await expect(items.first()).toHaveAttribute('data-state', 'unchecked')
    await expect(frame.getByText('var(--color-blue-500)')).toBeVisible()
  })

  test('WithValue story is controlled by the value prop', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-color-select--with-value')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('qui-color-select-item')

    await expect(items.nth(2)).toHaveAttribute('data-state', 'checked')
  })

  test('Disabled story blocks clicking', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-color-select--disabled')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('qui-color-select-item')

    await expect(items.first()).toBeDisabled()
    await expect(items.first()).toHaveAttribute('data-state', 'checked')
  })
})
