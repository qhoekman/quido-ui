import { test, expect } from '@playwright/test'

test.describe('Toggle Group', () => {
  test('Default story renders three items, all off, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      'http://localhost:6006/?path=/story/components-data-entry-toggle-group--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.locator('.q-toggle-group button')

    await expect(items).toHaveCount(3)
    for (let i = 0; i < 3; i++) {
      await expect(items.nth(i)).toHaveAttribute('data-state', 'off')
    }

    expect(errors).toEqual([])
  })

  test('regression: single-select is exclusive (modelValue wiring)', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-data-entry-toggle-group--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.locator('.q-toggle-group button')

    await items.nth(1).click()
    await expect(items.nth(1)).toHaveAttribute('data-state', 'on')

    await items.nth(2).click()
    await expect(items.nth(2)).toHaveAttribute('data-state', 'on')
    // selecting a new item in single mode must turn the previous one off,
    // which only happens if the controlled value round-trip actually works
    await expect(items.nth(1)).toHaveAttribute('data-state', 'off')
  })

  test('multiple type allows more than one item to be on at once', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-data-entry-toggle-group--default'
    )
    const typeSelect = page.locator('select').filter({ hasText: 'single' })
    await typeSelect.selectOption('multiple')

    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.locator('.q-toggle-group button')

    await items.nth(0).click()
    await items.nth(2).click()

    await expect(items.nth(0)).toHaveAttribute('data-state', 'on')
    await expect(items.nth(2)).toHaveAttribute('data-state', 'on')
    await expect(items.nth(1)).toHaveAttribute('data-state', 'off')
  })
})
