import { test, expect } from '@playwright/test'

test.describe('Password Input', () => {
  test('Default story renders a password field, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-password-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('input[type="password"]')

    await expect(input).toBeVisible()
    await expect(input).toHaveAttribute('placeholder', 'Enter password')

    expect(errors).toEqual([])
  })

  test('regression: typing persists and is not reset by stale $attrs', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-password-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('input[type="password"]')

    await input.fill('secret123')
    await expect(input).toHaveValue('secret123')

    // trigger a re-render via the visibility toggle to ensure the typed
    // value survives a subsequent patch cycle
    await frame.getByRole('button', { name: 'Toggle password visibility' }).click()
    await expect(frame.locator('input[type="text"]')).toHaveValue('secret123')
  })

  test('toggling visibility switches the input type between password and text', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-password-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const toggle = frame.getByRole('button', { name: 'Toggle password visibility' })

    await expect(frame.locator('input[type="password"]')).toBeVisible()
    await toggle.click()
    await expect(frame.locator('input[type="text"]')).toBeVisible()
    await toggle.click()
    await expect(frame.locator('input[type="password"]')).toBeVisible()
  })

  test('disabled prop disables both the input and the toggle button', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-password-input--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('input[type="password"]')).toBeDisabled()
    await expect(frame.getByRole('button', { name: 'Toggle password visibility' })).toBeDisabled()
  })
})
