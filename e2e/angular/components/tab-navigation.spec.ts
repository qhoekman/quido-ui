import { test, expect } from '@playwright/test'

test.describe('Tab Navigation', () => {
  test('Link story renders 5 items, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-tab-navigation--link')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('tab-navigation')).toBeVisible()
    await expect(frame.getByTestId('tab-navigation__item')).toHaveCount(5)
    await expect(frame.getByTestId('tab-navigation__link')).toHaveCount(5)
    await expect(frame.getByTestId('tab-navigation__rail')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: clicking Balances opens its dropdown menu with correct items', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-tab-navigation--link')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('tab-navigation__link').filter({ hasText: 'Balances' }).click()

    const menu = frame.getByTestId('tab-navigation__menu')
    await expect(menu).toBeVisible()
    await expect(frame.getByTestId('tab-navigation__menuitem')).toHaveCount(7)
    await expect(frame.getByTestId('tab-navigation__separator')).toHaveCount(1)
  })

  test('regression: clicking Transactions opens its dropdown menu with Recent/All', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-tab-navigation--link')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('tab-navigation__link').filter({ hasText: 'Transactions' }).click()

    const menuItems = frame.getByTestId('tab-navigation__menuitem')
    await expect(menuItems).toHaveCount(2)
    await expect(menuItems.filter({ hasText: 'Recent' })).toBeVisible()
    await expect(menuItems.filter({ hasText: 'All' })).toBeVisible()
  })

  test('regression: the disabled Support link has aria-disabled and is non-interactive', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-tab-navigation--link')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const support = frame.getByTestId('tab-navigation__link').filter({ hasText: 'Support' })
    await expect(support).toHaveAttribute('aria-disabled', 'true')
    await expect(support).toHaveCSS('pointer-events', 'none')
  })

  test('Border and Pill stories render without console errors', async ({ page }) => {
    for (const story of ['border', 'pill']) {
      const errors: string[] = []
      page.on('pageerror', (error) => errors.push(error.message))

      await page.goto(`?path=/story/components-navigation-tab-navigation--${story}`)
      const frame = page.frameLocator('#storybook-preview-iframe')
      await expect(frame.getByTestId('tab-navigation')).toBeVisible()
      await expect(frame.getByTestId('tab-navigation__link')).toHaveCount(5)

      expect(errors).toEqual([])
    }
  })
})
