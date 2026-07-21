import { test, expect } from '@playwright/test'

test.describe('Toggle', () => {
  test('Default story renders off without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-actions-toggle--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const toggle = frame.getByTestId('toggle')

    await expect(toggle).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-pressed', 'false')

    expect(errors).toEqual([])
  })

  test('clicking toggles aria-pressed on and off', async ({ page }) => {
    await page.goto('?path=/story/components-actions-toggle--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const toggle = frame.getByTestId('toggle')

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-pressed', 'true')

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-pressed', 'false')
  })
})
