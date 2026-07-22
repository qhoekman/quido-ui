import { test, expect } from '@playwright/test'

test.describe('Link', () => {
  test('Default story renders an anchor with correct href and text, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-link--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const link = frame.getByTestId('link')

    await expect(link).toHaveJSProperty('tagName', 'A')
    await expect(link).toHaveAttribute('href', 'https://platform.squid-ware.nl')
    await expect(link).toHaveText('Default Link')

    expect(errors).toEqual([])
  })

  test('regression: link is not underlined by default and underlines on hover', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-link--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const link = frame.getByTestId('link')

    await expect(link).toHaveCSS('text-decoration-line', 'none')
    await link.hover()
    await expect(link).toHaveCSS('text-decoration-line', 'underline')
  })
})
