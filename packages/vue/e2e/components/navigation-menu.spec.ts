import { test, expect } from '@playwright/test'

test.describe('Navigation Menu', () => {
  test('Default story renders brand, items, actions with flex layout, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      'http://localhost:6006/?path=/story/components-navigation-navigation-menu--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    const root = frame.getByTestId('qui-navigation-menu')
    await expect(root).toHaveJSProperty('tagName', 'NAV')
    await expect(root).toHaveCSS('display', 'flex')

    await expect(frame.getByTestId('qui-navigation-menu-brand')).toHaveCSS('display', 'flex')
    await expect(frame.getByTestId('qui-navigation-menu-items')).toHaveCSS('display', 'flex')
    await expect(frame.getByTestId('qui-navigation-menu-actions')).toHaveCSS('display', 'flex')

    const logo = frame.getByTestId('qui-navigation-menu-logo')
    await expect(logo).toHaveJSProperty('tagName', 'A')
    await expect(logo).toHaveCSS('display', 'flex')

    expect(errors).toEqual([])
  })

  test('regression: as="div" on the root still renders display:flex (scoped CSS must not rely on bare nav/[role] selectors)', async ({
    page
  }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-navigation-navigation-menu--default'
    )
    await page.getByRole('tab', { name: 'Controls' }).click()
    await page.locator('#control-as').selectOption('div')

    const frame = page.frameLocator('#storybook-preview-iframe')
    const root = frame.getByTestId('qui-navigation-menu')

    await expect(root).toHaveJSProperty('tagName', 'DIV')
    await expect(root).toHaveCSS('display', 'flex')
  })
})
