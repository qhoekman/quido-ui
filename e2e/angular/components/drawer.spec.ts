import { test, expect } from '@playwright/test'

test.describe('Drawer', () => {
  test('Default story renders closed, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-overlay-drawer--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const drawer = frame.getByTestId('drawer')
    await expect(drawer).toBeVisible()
    await expect(drawer).not.toHaveClass(/(?<!\S)open(?!\S)/)

    expect(errors).toEqual([])
  })

  test('regression: toggling the trigger opens and closes the drawer', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-drawer--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.locator('[data-testid="drawer__content"] button').click()
    await expect(frame.getByTestId('drawer')).toHaveClass(/(?<!\S)open(?!\S)/)

    await frame.locator('[data-testid="drawer__content"] button').click()
    await expect(frame.getByTestId('drawer')).not.toHaveClass(/(?<!\S)open(?!\S)/)
  })

  test('regression: pressing Escape closes the open drawer', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-drawer--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.locator('[data-testid="drawer__content"] button').click()
    await expect(frame.getByTestId('drawer')).toHaveClass(/(?<!\S)open(?!\S)/)

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('drawer')).not.toHaveClass(/(?<!\S)open(?!\S)/)
  })
})
