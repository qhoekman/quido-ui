import { test, expect } from '@playwright/test'

test.describe('Icon', () => {
  test('Default story renders a span wrapping the SVG at the md size, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-feedback-icon--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const icon = frame.locator('.q-icon')

    await expect(icon).toBeVisible()
    await expect(icon).toHaveJSProperty('tagName', 'SPAN')
    await expect(icon).toHaveClass(/size--md/)
    await expect(icon.locator('svg')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('size prop applies the corresponding size class', async ({ page }) => {
    await page.goto('?path=/story/components-feedback-icon--default')
    const icon = page.frameLocator('#storybook-preview-iframe').locator('.q-icon')

    const sizeSelect = page.locator('select').filter({ hasText: 'md' })
    await sizeSelect.selectOption('xl')

    await expect(icon).toHaveClass(/size--xl/)
  })

  test('asChild set from initial mount merges classes onto the SVG directly instead of wrapping it', async ({
    page
  }) => {
    // asChild must be set at mount time, not toggled live: reka-ui's
    // Primitive decides once in setup() whether to wrap in a real element or
    // merge onto the slot child via Slot, and that decision isn't reactive —
    // toggling an already-mounted instance's asChild (e.g. via the Storybook
    // Controls panel) never re-picks the branch. Not a bug in this
    // component: asChild is always a static, author-time prop in real usage.
    await page.goto(
      '?path=/story/components-feedback-icon--default&args=asChild:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const icon = frame.locator('.q-icon')
    await expect(icon).toHaveJSProperty('tagName', 'svg')
  })
})
