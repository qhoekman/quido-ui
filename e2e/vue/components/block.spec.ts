import { test, expect } from '@playwright/test'

test.describe('Block', () => {
  test('Default renders with base styling, no inset margin or outline border', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-mobile-components-block--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const block = frame.locator('.q-block')

    await expect(block).toHaveCSS('margin-left', '0px')
    await expect(block).toHaveCSS('border-width', '0px')

    const title = frame.locator('.q-block-title')
    await expect(title).toContainText('Block Title')
    await expect(title).toHaveJSProperty('tagName', 'H2')

    expect(errors).toEqual([])
  })

  test('WithInset applies inset margin', async ({ page }) => {
    await page.goto('?path=/story/features-mobile-components-block--with-inset')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const block = frame.locator('.q-block')

    await expect(block).toHaveCSS('margin-left', '16px')
    await expect(block).toHaveCSS('border-width', '0px')
  })

  test('WithOutline applies inset margin and a visible border', async ({ page }) => {
    await page.goto('?path=/story/features-mobile-components-block--with-outline')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const block = frame.locator('.q-block')

    await expect(block).toHaveCSS('margin-left', '16px')
    await expect(block).toHaveCSS('border-width', '1px')
  })
})
