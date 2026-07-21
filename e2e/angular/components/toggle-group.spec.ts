import { test, expect } from '@playwright/test'

test.describe('ToggleGroup', () => {
  test('Default story renders three items, all off, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-actions-toggle-group--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('toggle-group').getByRole('button')

    await expect(items).toHaveCount(3)
    for (let i = 0; i < 3; i++) {
      await expect(items.nth(i)).toHaveAttribute('aria-pressed', 'false')
    }

    expect(errors).toEqual([])
  })

  test('single strategy is exclusive', async ({ page }) => {
    await page.goto('?path=/story/components-actions-toggle-group--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('toggle-group').getByRole('button')

    await items.nth(1).click()
    await expect(items.nth(1)).toHaveAttribute('aria-pressed', 'true')

    await items.nth(2).click()
    await expect(items.nth(2)).toHaveAttribute('aria-pressed', 'true')
    await expect(items.nth(1)).toHaveAttribute('aria-pressed', 'false')
  })

  test('multiple strategy allows more than one item pressed at once', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-actions-toggle-group--default&args=strategy:multiple'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('toggle-group').getByRole('button')

    await items.nth(0).click()
    await items.nth(2).click()

    await expect(items.nth(0)).toHaveAttribute('aria-pressed', 'true')
    await expect(items.nth(2)).toHaveAttribute('aria-pressed', 'true')
    await expect(items.nth(1)).toHaveAttribute('aria-pressed', 'false')
  })
})
