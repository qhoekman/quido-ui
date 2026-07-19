import { test, expect } from '@playwright/test'

test.describe('Toolbar', () => {
  test('WithText story renders a fixed bottom toolbar with 5 links, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-mobile-components-toolbar--with-text')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const toolbar = frame.locator('.q-toolbar')
    await expect(toolbar).toBeVisible()
    await expect(toolbar).toHaveCSS('position', 'fixed')
    await expect(toolbar).toHaveCSS('bottom', '0px')

    await expect(frame.locator('.q-toolbar-inner')).toHaveCount(1)
    await expect(frame.locator('.q-toolbar-content')).toHaveCSS('display', 'flex')

    const links = frame.locator('.q-toolbar-link')
    await expect(links).toHaveCount(5)
    await expect(links.first()).toHaveJSProperty('tagName', 'A')
    await expect(links.first()).toHaveAttribute('href', '#')

    expect(errors).toEqual([])
  })

  test('WithIcons story renders 5 icon links', async ({ page }) => {
    await page.goto(
      '?path=/story/features-mobile-components-toolbar--with-icons'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    const links = frame.locator('.q-toolbar-link')
    await expect(links).toHaveCount(5)
    await expect(links.first().locator('svg')).toBeVisible()
  })
})
