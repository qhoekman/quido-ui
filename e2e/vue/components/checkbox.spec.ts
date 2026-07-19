import { test, expect } from '@playwright/test'

test.describe('Checkbox', () => {
  test('Default story renders unchecked without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-checkbox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const checkbox = frame.locator('.q-checkbox')

    await expect(checkbox).toHaveAttribute('data-state', 'unchecked')
    await expect(checkbox).toHaveAttribute('aria-checked', 'false')

    expect(errors).toEqual([])
  })

  test('regression: an explicit checked=true prop is honored (was previously silently ignored)', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-checkbox--default&args=checked:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const checkbox = frame.locator('.q-checkbox')

    await expect(checkbox).toHaveAttribute('data-state', 'checked')
    await expect(checkbox).toHaveAttribute('aria-checked', 'true')
  })

  test('clicking the checkbox or its label toggles the checked state', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-checkbox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const checkbox = frame.locator('.q-checkbox')

    await checkbox.click()
    await expect(checkbox).toHaveAttribute('data-state', 'checked')

    await frame.getByText('Accept terms and conditions').click()
    await expect(checkbox).toHaveAttribute('data-state', 'unchecked')
  })

  test('disabled checkbox cannot be toggled', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-checkbox--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const checkbox = frame.locator('.q-checkbox')

    await expect(checkbox).toBeDisabled()
  })
})
