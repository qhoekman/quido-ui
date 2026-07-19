import { test, expect } from '@playwright/test'

test.describe('Tabs', () => {
  test('Default story renders with Account tab active', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-application-components-tabs--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('tabs__list')).toBeVisible()
    await expect(frame.getByTestId('tabs__trigger-account')).toHaveAttribute(
      'data-state',
      'active'
    )
    await expect(frame.getByTestId('tabs__content-account')).toBeVisible()
    await expect(frame.getByTestId('tabs__content-password')).not.toBeVisible()

    expect(errors).toEqual([])
  })

  test('clicking a trigger switches the active tab content', async ({
    page
  }) => {
    await page.goto('?path=/story/features-application-components-tabs--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('tabs__trigger-password').click()
    await expect(frame.getByTestId('tabs__trigger-password')).toHaveAttribute(
      'data-state',
      'active'
    )
    await expect(frame.getByTestId('tabs__content-password')).toBeVisible()
    await expect(frame.getByTestId('tabs__content-account')).not.toBeVisible()
  })
})
