import { test, expect } from '@playwright/test'

test.describe('Tab Navigation', () => {
  test('Link story renders correctly with a flex layout, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-navigation-tab-navigation--link')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const nav = frame.getByTestId('qui-tab-navigation')
    await expect(nav).toBeVisible()
    await expect(nav).toHaveJSProperty('tagName', 'UL')
    await expect(nav).toHaveCSS('display', 'flex')

    await expect(frame.getByTestId('qui-tab-navigation-item')).toHaveCount(5)

    expect(errors).toEqual([])
  })

  test('regression: clicking a dropdown trigger opens a correctly-styled, non-transparent menu', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-navigation-tab-navigation--link')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByText('Balances').click()

    const menu = frame.getByTestId('qui-tab-navigation-menu')
    await expect(menu).toBeVisible()
    // regression: content is rendered via a Teleport, which severed the
    // scoped-CSS attribute entirely -- background stayed transparent
    // instead of using the popover background color
    await expect(menu).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')

    const items = frame.getByTestId('qui-tab-navigation-menuitem')
    await expect(items).toHaveCount(7)
    await expect(items.first()).toHaveText('View Balance')

    await expect(frame.getByTestId('qui-tab-navigation-separator')).toBeVisible()
  })

  test('Border and Pill stories render correctly', async ({ page }) => {
    for (const story of ['border', 'pill']) {
      await page.goto(
        `http://localhost:6006/?path=/story/components-navigation-tab-navigation--${story}`
      )
      const frame = page.frameLocator('#storybook-preview-iframe')
      const nav = frame.getByTestId('qui-tab-navigation')
      await expect(nav).toHaveCSS('display', 'flex')
      await expect(frame.getByTestId('qui-tab-navigation-item')).toHaveCount(5)
    }
  })
})
