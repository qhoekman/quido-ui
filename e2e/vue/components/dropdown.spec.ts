import { test, expect } from '@playwright/test'

test.describe('Dropdown', () => {
  test('regression: fully uncontrolled usage (no v-model:open) still opens on trigger click', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-overlay-drop-down--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()

    const content = frame.locator('.q-dropdown-content')
    await expect(content).toHaveCount(1)
    await expect(content).toContainText('Profile')

    expect(errors).toEqual([])
  })

  test('regression: content renders with correct border/background/shadow (Teleport scoped-CSS-attribute loss)', async ({
    page
  }) => {
    // DropdownMenuContent renders via reka-ui's internal Teleport/Presence
    // machinery, whose DOM output never receives Vue's scoped-CSS
    // data-v-* attribute -- a scoped `.q-dropdown-content` selector
    // silently never matched, leaving the panel completely unstyled
    // (transparent, borderless, no shadow) with zero console errors.
    await page.goto('?path=/story/components-overlay-drop-down--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    const content = frame.locator('.q-dropdown-content')
    await expect(content).toHaveCount(1)

    await expect(content).not.toHaveCSS('border-width', '0px')
    await expect(content).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    await expect(content).not.toHaveCSS('box-shadow', 'none')
  })

  test('regression: submenu opens on hover and renders with correct styling', async ({ page }) => {
    // dropdown-sub.vue's `open` prop had the same auto-default coercion
    // bug: the story never binds v-model:open on DropdownSubComponent,
    // so `open` silently resolved to `false` instead of `undefined`,
    // pinning reka-ui's DropdownMenuSub in controlled-closed mode and
    // permanently blocking the submenu from opening via hover or keyboard.
    await page.goto('?path=/story/components-overlay-drop-down--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    await frame.getByText('Invite users').hover()

    const subContent = frame.locator('.q-dropdown-sub-content')
    await expect(subContent).toHaveCount(1)
    await expect(subContent).not.toHaveCSS('border-width', '0px')
    await expect(subContent).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  })

  test('Default story still works correctly (v-model:open regression coverage)', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-drop-down--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    const content = frame.locator('.q-dropdown-content')
    await expect(content).toHaveCount(1)
    await expect(content).toContainText('My Account')

    await frame.getByText('Profile').click()
    await expect(content).toHaveCount(0)
  })
})
