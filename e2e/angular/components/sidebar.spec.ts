import { test, expect } from '@playwright/test'

test.describe('Sidebar', () => {
  test('Default story renders sidebar with header, content, footer and nav items, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-sidebar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('sidebar')).toBeVisible()
    await expect(frame.getByTestId('sidebar__header')).toBeVisible()
    await expect(frame.getByTestId('sidebar__content')).toBeVisible()
    await expect(frame.getByTestId('sidebar__footer')).toBeVisible()
    await expect(frame.getByTestId('sidebar__trigger')).toBeVisible()

    const buttons = frame.getByTestId('sidebar__menu-button')
    await expect(buttons.filter({ hasText: 'Playground' })).toBeVisible()
    await expect(buttons.filter({ hasText: 'Models' })).toBeVisible()
    await expect(buttons.filter({ hasText: 'Documentation' })).toBeVisible()
    await expect(buttons.filter({ hasText: 'Settings' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: nav item with isActive starts expanded and shows its sub-items', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-sidebar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const subButtons = frame.getByTestId('sidebar__menu-sub-button')
    await expect(subButtons.filter({ hasText: 'History' })).toBeVisible()
    await expect(subButtons.filter({ hasText: 'Starred' })).toBeVisible()
  })

  test('regression: clicking a collapsed nav trigger expands its sub-items', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-sidebar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const subButtons = frame.getByTestId('sidebar__menu-sub-button')
    await expect(subButtons.filter({ hasText: 'Genesis' })).toHaveCount(0)

    await frame.getByTestId('sidebar__menu-button').filter({ hasText: 'Models' }).click()
    await expect(subButtons.filter({ hasText: 'Genesis' })).toBeVisible()
  })

  test('regression: clicking the trigger collapses the sidebar to icon mode and hides the icon-hidden group', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-sidebar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const sidebar = frame.getByTestId('sidebar')
    await expect(sidebar).not.toHaveClass(/collapsible--icon/)

    await frame.getByTestId('sidebar__trigger').click()

    await expect(sidebar).toHaveClass(/collapsible--icon/)
    await expect(sidebar).toHaveClass(/state--collapsed/)

    const platformGroup = frame.getByTestId('sidebar__group').first()
    await expect(platformGroup).toBeHidden()
  })
})
