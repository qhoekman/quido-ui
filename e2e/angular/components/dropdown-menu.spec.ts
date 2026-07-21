import { test, expect } from '@playwright/test'

test.describe('Dropdown Menu', () => {
  test('Default story renders closed, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-dropdown-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByRole('button', { name: 'My profile' })).toBeVisible()
    await expect(frame.getByTestId('dropdown-menu__content')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens the menu with correct role, styling, and content', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-dropdown-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'My profile' }).click()

    const content = frame.getByTestId('dropdown-menu__content')
    await expect(content).toBeVisible()
    await expect(content).toHaveAttribute('role', 'menu')
    await expect(content).not.toHaveCSS('border-width', '0px')
    await expect(content).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    await expect(content).not.toHaveCSS('box-shadow', 'none')

    await expect(frame.getByTestId('dropdown-menu__label')).toHaveText('My Account')
    await expect(frame.getByTestId('dropdown-menu__separator')).toHaveCount(2)
    await expect(frame.getByTestId('dropdown-menu__group')).toHaveCount(2)
    await expect(frame.getByTestId('dropdown-menu__item')).toHaveCount(6)
  })

  test('regression: clicking a menu item closes the menu', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-dropdown-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'My profile' }).click()
    await expect(frame.getByTestId('dropdown-menu__content')).toBeVisible()

    await frame.getByTestId('dropdown-menu__item').filter({ hasText: 'Profile' }).click()
    await expect(frame.getByTestId('dropdown-menu__content')).toHaveCount(0)
  })

  test('pressing Escape closes the menu', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-dropdown-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'My profile' }).click()
    await expect(frame.getByTestId('dropdown-menu__content')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('dropdown-menu__content')).toHaveCount(0)
  })
})
