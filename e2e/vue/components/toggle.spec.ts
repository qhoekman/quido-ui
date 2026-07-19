import { test, expect } from '@playwright/test'

test.describe('Toggle', () => {
  test('Default story loads without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-actions-toggle--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByRole('button', { name: 'Toggle' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('clicking toggles aria-pressed and data-state on and off', async ({ page }) => {
    await page.goto('?path=/story/components-actions-toggle--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const toggle = frame.getByRole('button', { name: 'Toggle' })

    await expect(toggle).toHaveAttribute('aria-pressed', 'false')
    await expect(toggle).toHaveAttribute('data-state', 'off')

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-pressed', 'true')
    await expect(toggle).toHaveAttribute('data-state', 'on')

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-pressed', 'false')
    await expect(toggle).toHaveAttribute('data-state', 'off')
  })

  test('disabled toggle cannot be pressed', async ({ page }) => {
    await page.goto(
      '?path=/story/components-actions-toggle--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const toggle = frame.getByRole('button', { name: 'Toggle' })

    await expect(toggle).toBeDisabled()
  })
})
