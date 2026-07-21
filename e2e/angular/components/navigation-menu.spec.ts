import { test, expect } from '@playwright/test'

test.describe('Navigation Menu', () => {
  test('Default story renders brand, links, and closed dropdown trigger, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-navigation-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('navigation-menu')).toBeVisible()
    await expect(frame.getByTestId('navigation-menu__brand')).toBeVisible()
    await expect(frame.getByTestId('navigation-menu__logo')).toBeVisible()
    await expect(frame.getByTestId('navigation-menu__items')).toBeVisible()
    await expect(frame.getByTestId('navigation-menu__actions')).toBeVisible()
    await expect(frame.getByTestId('navigation-menu__dropdown-content')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: hovering the dropdown trigger opens the menu with correct role and items', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-navigation-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('navigation-menu__dropdown-trigger').hover()

    const content = frame.getByTestId('navigation-menu__dropdown-content')
    await expect(content).toBeVisible()
    await expect(content).toHaveAttribute('role', 'menu')

    const items = frame.getByTestId('navigation-menu__dropdown-item')
    await expect(items).toHaveCount(3)
    await expect(items.nth(0)).toHaveAttribute('role', 'menuitem')
    await expect(items.nth(0)).toHaveCSS('display', 'flex')
    await expect(items.nth(0)).toHaveCSS('cursor', 'pointer')
  })

  test('regression: moving the mouse from the content back out closes the dropdown', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-navigation-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('navigation-menu__dropdown-trigger').hover()
    await expect(frame.getByTestId('navigation-menu__dropdown-content')).toBeVisible()

    await frame.getByTestId('navigation-menu__dropdown-item').first().hover()
    await page.mouse.move(10, 10)

    await expect(frame.getByTestId('navigation-menu__dropdown-content')).toHaveCount(0)
  })
})
