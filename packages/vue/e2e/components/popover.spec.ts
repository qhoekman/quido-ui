import { test, expect } from '@playwright/test'

test.describe('Popover', () => {
  test('regression: fully uncontrolled usage (no v-model:open) still opens on trigger click', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    // popover.vue layers its own controlled/uncontrolled logic on top of
    // reka-ui's PopoverRoot (feeding it a computed `isOpen` rather than
    // `open` directly). `isControlled` was a plain `const` computed once
    // at setup, and `open` had no explicit `undefined` default -- so an
    // unbound `open` silently resolved to `false`, permanently locking
    // `isControlled` at `true` with `isOpen` stuck at `false` forever.
    await page.goto('http://localhost:6006/?path=/story/components-overlay-popover--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    const content = frame.locator('.q-popover-content')
    await expect(content).toHaveCount(1)
    await expect(content).toContainText('Uncontrolled popover content')

    expect(errors).toEqual([])
  })

  test('regression: content renders with correct border/background/shadow (Teleport scoped-CSS-attribute loss)', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-overlay-popover--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    const content = frame.locator('.q-popover-content')
    await expect(content).toHaveCount(1)

    await expect(content).not.toHaveCSS('border-width', '0px')
    await expect(content).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    await expect(content).not.toHaveCSS('box-shadow', 'none')
  })

  test('Default story (v-model:open) still works correctly', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-overlay-popover--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    const content = frame.locator('.q-popover-content')
    await expect(content).toHaveCount(1)
    await expect(content).toContainText('Place content for the popover here.')
  })
})
