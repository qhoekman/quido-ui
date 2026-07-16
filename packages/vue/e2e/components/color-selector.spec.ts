import { test, expect } from '@playwright/test'

test.describe('ColorSelector', () => {
  test('clicking a color item selects it', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      'http://localhost:6006/?path=/story/features-ecommerce-components-color-selector--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    const blueItem = frame.locator('[data-testid="qui-color-selector-item"][value="blue"]')
    await blueItem.click()

    await expect(blueItem).toHaveAttribute('data-state', 'checked')
    await expect(blueItem).toHaveAttribute('aria-checked', 'true')
    await expect(frame.locator('.q-color-selector-item-indicator .indicator')).toHaveCount(1)

    expect(errors).toEqual([])
  })

  test('selecting a different color deselects the previous one (radio group behavior)', async ({
    page
  }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/features-ecommerce-components-color-selector--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    const blueItem = frame.locator('[data-testid="qui-color-selector-item"][value="blue"]')
    const redItem = frame.locator('[data-testid="qui-color-selector-item"][value="red"]')

    await blueItem.click()
    await expect(blueItem).toHaveAttribute('data-state', 'checked')

    await redItem.click()
    await expect(redItem).toHaveAttribute('data-state', 'checked')
    await expect(blueItem).toHaveAttribute('data-state', 'unchecked')
  })
})
