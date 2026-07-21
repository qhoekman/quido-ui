import { test, expect } from '@playwright/test'

test.describe('Tabs', () => {
  test('Default story renders with the first tab active, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-tabs--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('tabs')).toBeVisible()
    await expect(frame.getByTestId('tabs__trigger')).toHaveCount(3)
    await expect(frame.getByRole('heading', { name: 'Account' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: clicking a trigger switches the active tab and content', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-tabs--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('tabs__trigger').filter({ hasText: 'Password' }).click()

    await expect(frame.getByRole('heading', { name: 'Password' })).toBeVisible()
    await expect(
      frame.getByTestId('tabs__trigger').filter({ hasText: 'Password' })
    ).toHaveAttribute('aria-expanded', 'true')
    await expect(
      frame.getByTestId('tabs__trigger').filter({ hasText: 'Account' })
    ).toHaveAttribute('aria-expanded', 'false')
  })

  test('regression: the disabled trigger is non-interactive', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-tabs--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const disabled = frame.getByTestId('tabs__trigger').filter({ hasText: 'Disabled' })
    await expect(disabled).toBeDisabled()
    await expect(disabled).toHaveCSS('pointer-events', 'none')
  })
})
