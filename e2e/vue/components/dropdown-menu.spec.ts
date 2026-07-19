import { test, expect } from '@playwright/test'

test.describe('DropdownMenu', () => {
  test('regression: fully uncontrolled usage (no v-model:open) still opens on trigger click', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-overlay-dropdown-menu--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()

    const content = frame.locator('.q-dropdown-menu-content')
    await expect(content).toHaveCount(1)
    await expect(content).toContainText('Profile')

    expect(errors).toEqual([])
  })

  test('regression: content renders with correct border/background (Teleport scoped-CSS-attribute loss)', async ({
    page
  }) => {
    await page.goto('?path=/story/components-overlay-dropdown-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    const content = frame.locator('.q-dropdown-menu-content')
    await expect(content).toHaveCount(1)

    await expect(content).not.toHaveCSS('border-width', '0px')
    await expect(content).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    await expect(content).not.toHaveCSS('box-shadow', 'none')
  })

  test('regression: submenu opens on hover and renders with correct styling', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-dropdown-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    await frame.getByText('Invite users').hover()

    const subContent = frame.locator('.q-dropdown-menu-sub-content')
    await expect(subContent).toHaveCount(1)
    await expect(subContent).not.toHaveCSS('border-width', '0px')
    await expect(subContent).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  })

  test('Default story still works correctly (v-model:open regression coverage)', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-dropdown-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    const content = frame.locator('.q-dropdown-menu-content')
    await expect(content).toHaveCount(1)
    await expect(content).toContainText('My Account')

    await frame.getByText('Profile').click()
    await expect(content).toHaveCount(0)
  })
})
