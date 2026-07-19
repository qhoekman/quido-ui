import { test, expect } from '@playwright/test'

test.describe('Tooltip', () => {
  test('regression: fully uncontrolled usage (no v-model:open) still opens on hover', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    // tooltip.vue layers its own controlled/uncontrolled logic on top of
    // reka-ui's TooltipRoot (feeding it a computed `isOpen`, same pattern
    // as popover.vue/hover-card.vue). `isControlled` was a plain `const`
    // computed once at setup, and `open` had no explicit `undefined`
    // default -- so an unbound `open` silently resolved to `false`,
    // permanently locking `isControlled` at `true` with `isOpen` stuck
    // at `false` forever.
    await page.goto('?path=/story/components-overlay-tooltip--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Hover' })

    await trigger.hover()
    const content = frame.locator('.q-tooltip-content')
    await expect(content).toHaveCount(1, { timeout: 2000 })
    await expect(content).toContainText('Uncontrolled tooltip content')

    expect(errors).toEqual([])
  })

  test('regression: content renders with correct background (Teleport scoped-CSS-attribute loss)', async ({
    page
  }) => {
    await page.goto('?path=/story/components-overlay-tooltip--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Hover' })

    await trigger.hover()
    const content = frame.locator('.q-tooltip-content')
    await expect(content).toHaveCount(1, { timeout: 2000 })

    await expect(content).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    await expect(content).not.toHaveCSS('box-shadow', 'none')
  })

  test('regression: arrow fill matches --color-tooltip (same Teleport scope loss, extends to slotted children)', async ({
    page
  }) => {
    // The scope-id loss isn't limited to the Teleported root -- any
    // component rendered as slot content within that relocated subtree
    // (e.g. TooltipArrow, used inside TooltipContent's slot) also loses
    // its data-v-* attribute. tooltip-arrow.vue's `fill: var(--color-tooltip)`
    // rule silently never matched, so the SVG fell back to the browser's
    // default black fill -- visually similar to the dark tooltip color,
    // masking the bug.
    await page.goto('?path=/story/components-overlay-tooltip--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Hover' })

    await trigger.hover()
    const arrow = frame.locator('.q-tooltip-arrow')
    await expect(arrow).toHaveCount(1, { timeout: 2000 })

    const diag = await arrow.evaluate((el) => {
      const cs = getComputedStyle(el)
      return { fill: cs.fill, colorTooltip: cs.getPropertyValue('--color-tooltip') }
    })
    expect(diag.fill).not.toBe('rgb(0, 0, 0)')
  })

  test('Default story (v-model:open) still works correctly', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-tooltip--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Hover' })

    await trigger.hover()
    const content = frame.locator('.q-tooltip-content')
    await expect(content).toHaveCount(1, { timeout: 2000 })
    await expect(content).toContainText('Add to library')
  })
})
