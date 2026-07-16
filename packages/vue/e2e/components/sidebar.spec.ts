import { test, expect } from '@playwright/test'

test.describe('Sidebar', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test('Default story renders the desktop fixed sidebar with correct width/position, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/features-application-components-sidebar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const sidebar = frame.getByTestId('qui-sidebar')
    await expect(sidebar).toBeVisible()
    await expect(sidebar).toHaveClass(/side--left variant--sidebar collapsible--offcanvas state--expanded/)

    const fixed = frame.locator('.sidebar-fixed')
    await expect(fixed).toHaveCSS('display', 'flex')
    await expect(fixed).toHaveCSS('width', '256px')
    await expect(fixed).toHaveCSS('left', '0px')

    await expect(frame.locator('.sidebar-content')).toContainText('Sidebar Content')

    expect(errors).toEqual([])
  })

  test('RightSide story positions the fixed sidebar on the right', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/features-application-components-sidebar--right-side'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const fixed = frame.locator('.sidebar-fixed')
    await expect(fixed).toHaveCSS('right', '0px')
  })

  test('Collapsed story shrinks the sidebar to the icon width and offscreen-offsets it (offcanvas)', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/features-application-components-sidebar--collapsed')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const fixed = frame.locator('.sidebar-fixed')
    await expect(fixed).toHaveCSS('width', '48px')
    await expect(fixed).toHaveCSS('left', '-256px')
  })

  test('NoneCollapsible story renders an empty placeholder div, matching the Angular reference behavior', async ({
    page
  }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/features-application-components-sidebar--none-collapsible'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const placeholder = frame.locator('.q-sidebar.collapsible--none')
    await expect(placeholder).toHaveCount(1)
    await expect(placeholder).toBeEmpty()
  })

  test('regression: below the 768px breakpoint, renders the mobile Drawer instead of the fixed sidebar', async ({
    page
  }) => {
    await page.setViewportSize({ width: 375, height: 800 })
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/features-application-components-sidebar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-sidebar')).toBeVisible()
    await expect(frame.locator('.sidebar-drawer')).toHaveCount(1)
    await expect(frame.locator('.sidebar-fixed')).toHaveCount(0)

    expect(errors).toEqual([])
  })
})
