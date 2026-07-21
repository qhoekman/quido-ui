import { test, expect } from '@playwright/test'

test.describe('Top Bar', () => {
  test('Default story renders a header with 3 sections and correct button content, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-top-bar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const bar = frame.getByTestId('top-bar')
    await expect(bar).toBeVisible()
    await expect(bar).toHaveJSProperty('tagName', 'HEADER')
    await expect(bar).toHaveCSS('display', 'flex')

    const sections = frame.getByTestId('top-bar__section')
    await expect(sections).toHaveCount(3)
    await expect(sections.nth(0)).toHaveCSS('flex-grow', '1')

    const lastSection = sections.nth(2)
    await expect(lastSection).toHaveCSS('justify-content', 'flex-end')
    await expect(lastSection.getByRole('button')).toHaveText(/My profile/)

    expect(errors).toEqual([])
  })

  test('regression: clicking the profile button opens the dropdown menu', async ({ page }) => {
    await page.goto('?path=/story/components-layout-top-bar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'My profile' }).click()
    const menuItems = frame.getByTestId('dropdown-menu__item')
    await expect(menuItems.filter({ hasText: 'Profile' })).toBeVisible()
    await expect(menuItems.filter({ hasText: 'Logout' })).toBeVisible()
  })
})
