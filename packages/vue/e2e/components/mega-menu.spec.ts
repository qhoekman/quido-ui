import { test, expect } from '@playwright/test'

test.describe('Mega Menu', () => {
  test('Default story renders closed, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/features-website-components-mega-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const gettingStarted = frame.getByRole('button', { name: /Getting started/ })
    const components = frame.getByRole('button', { name: /Components/ })

    await expect(gettingStarted).toHaveAttribute('aria-expanded', 'false')
    await expect(components).toHaveAttribute('aria-expanded', 'false')

    // regression: content must not be permanently visible/mounted before
    // any interaction (this was completely broken previously)
    await expect(frame.locator('.q-mega-menu-content[data-state="open"]')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: hovering a trigger opens its content with correct positioning and chevron rotation', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/features-website-components-mega-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const gettingStarted = frame.getByRole('button', { name: /Getting started/ })
    await gettingStarted.hover()

    await expect(gettingStarted).toHaveAttribute('aria-expanded', 'true')
    await expect(gettingStarted).toHaveAttribute('data-state', 'open')

    const content = frame.locator('.q-mega-menu-content[data-state="open"]')
    await expect(content).toBeVisible()
    await expect(content).toHaveCSS('position', 'absolute')

    const chevron = gettingStarted.locator('.chevron-icon')
    await expect(chevron).not.toHaveCSS('transform', 'none')

    await expect(content.getByText('shadcn/ui')).toBeVisible()
    await expect(content.getByText('Introduction')).toBeVisible()
  })

  test('regression: moving the pointer to a sibling trigger switches the open content', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/features-website-components-mega-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const gettingStarted = frame.getByRole('button', { name: /Getting started/ })
    const components = frame.getByRole('button', { name: /Components/ })

    await gettingStarted.hover()
    await expect(gettingStarted).toHaveAttribute('data-state', 'open')

    await components.hover()
    await expect(components).toHaveAttribute('data-state', 'open')
    await expect(gettingStarted).toHaveAttribute('data-state', 'closed')

    const content = frame.locator('.q-mega-menu-content[data-state="open"]')
    await expect(content.getByText('Alert Dialog')).toBeVisible()
    await expect(content.getByText('Tooltip')).toBeVisible()
  })

  test('regression: clicking outside closes the open menu', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/features-website-components-mega-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const gettingStarted = frame.getByRole('button', { name: /Getting started/ })
    await gettingStarted.hover()
    await expect(gettingStarted).toHaveAttribute('data-state', 'open')

    await page.mouse.click(10, 10)
    await expect(gettingStarted).toHaveAttribute('data-state', 'closed')
  })

  test('plain link item ("Documentation") has no dropdown trigger behavior', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/features-website-components-mega-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const docLink = frame.getByRole('link', { name: 'Documentation' })
    await expect(docLink).toHaveAttribute('href', '/docs')
    await expect(docLink).not.toHaveAttribute('aria-expanded', /.+/)
  })
})
