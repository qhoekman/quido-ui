import { test, expect } from '@playwright/test'

test.describe('FloatingActionButton', () => {
  test('Default story renders a real, focusable button without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-actions-floating-action-button--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const fab = frame.getByRole('button')

    await expect(fab).toBeVisible()
    await expect(fab).toHaveJSProperty('tagName', 'BUTTON')
    await fab.focus()
    await expect(fab).toBeFocused()

    expect(errors).toEqual([])
  })

  test('disabled state applies aria-disabled and native disabled', async ({ page }) => {
    await page.goto(
      '?path=/story/components-actions-floating-action-button--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const fab = frame.getByRole('button')

    await expect(fab).toBeDisabled()
    await expect(fab).toHaveAttribute('aria-disabled', 'true')
  })
})
