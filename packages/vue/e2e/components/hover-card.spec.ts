import { test, expect } from '@playwright/test'

test.describe('HoverCard', () => {
  test('regression: fully uncontrolled usage (no v-model:open) still opens on hover and closes on leave', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    // hover-card.vue is a custom, hand-rolled implementation (no reka-ui
    // root). Its `open` prop had the same Boolean-prop auto-default
    // issue as reka-ui-backed components -- an unbound `open` silently
    // resolved to `false` instead of `undefined`. Worse, `isControlled`
    // was a plain `const` computed once at setup instead of a reactive
    // `computed()`, so even fixing the default alone wouldn't have been
    // enough: combined, `isControlled` locked in `true` forever with
    // `props.open` stuck at `false`, so `isOpen` could never become
    // `true` and hovering silently did nothing.
    await page.goto('http://localhost:6006/?path=/story/components-overlay-hover-card--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Hover over me' })

    await trigger.hover()
    const content = frame.locator('.q-hover-card-content')
    await expect(content).toHaveCount(1, { timeout: 1000 })
    await expect(content).toContainText('Uncontrolled hover card content')

    await page.mouse.move(5, 5)
    await expect(content).toHaveCount(0, { timeout: 1000 })

    expect(errors).toEqual([])
  })

  test('Default story (v-model:open) still works correctly', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-overlay-hover-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Hover over me' })

    await trigger.hover()
    const content = frame.locator('.q-hover-card-content')
    await expect(content).toHaveCount(1, { timeout: 1000 })
    await expect(content).toContainText('pulse')
  })
})
