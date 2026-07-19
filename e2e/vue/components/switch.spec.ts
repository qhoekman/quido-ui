import { test, expect } from '@playwright/test'

test.describe('Switch', () => {
  test('Default story renders unchecked, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-switch--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const sw = frame.locator('.q-switch')

    await expect(sw).toBeVisible()
    await expect(sw).toHaveAttribute('data-state', 'unchecked')
    await expect(sw).toHaveAttribute('aria-checked', 'false')

    expect(errors).toEqual([])
  })

  test('regression: clicking toggles checked state, including back off (modelValue wiring)', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-switch--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const sw = frame.locator('.q-switch')

    await sw.click()
    await expect(sw).toHaveAttribute('data-state', 'checked')

    await sw.click()
    await expect(sw).toHaveAttribute('data-state', 'unchecked')
  })

  test('clicking the associated label toggles the switch', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-switch--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const sw = frame.locator('.q-switch')

    await frame.getByText('Enable notifications').click()

    await expect(sw).toHaveAttribute('data-state', 'checked')
  })

  test('disabled prop prevents toggling', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-switch--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const sw = frame.locator('.q-switch')

    await expect(sw).toBeDisabled()
    await expect(sw).toHaveAttribute('data-state', 'unchecked')
  })
})
