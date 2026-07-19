import { test, expect } from '@playwright/test'

test.describe('Link', () => {
  test('Default story renders an anchor with correct href and text, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-link--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const link = frame.getByTestId('qui-link')

    await expect(link).toHaveJSProperty('tagName', 'A')
    await expect(link).toHaveAttribute('href', 'https://pulse.quido.online')
    await expect(link).toHaveText('Default Link')
    await expect(link).toHaveCSS('display', 'inline-flex')

    expect(errors).toEqual([])
  })

  test('Internal story renders a relative href', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-link--internal')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('qui-link')).toHaveAttribute('href', '/about')
  })

  test('MultipleLinks story renders 3 independent links', async ({ page }) => {
    await page.goto(
      '?path=/story/components-navigation-link--multiple-links'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const links = frame.getByTestId('qui-link')

    await expect(links).toHaveCount(3)
    await expect(links.nth(0)).toHaveAttribute('href', 'https://pulse.quido.online')
    await expect(links.nth(1)).toHaveAttribute('href', '/about')
    await expect(links.nth(2)).toHaveAttribute('href', '/contact')
  })

  test('hovering underlines the link', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-link--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const link = frame.getByTestId('qui-link')

    await expect(link).toHaveCSS('text-decoration-line', 'none')
    await link.hover()
    await expect(link).toHaveCSS('text-decoration-line', 'underline')
  })
})
