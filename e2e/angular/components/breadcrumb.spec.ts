import { test, expect } from '@playwright/test'

test.describe('Breadcrumb', () => {
  test('Default story renders the full compound structure with correct tags and a11y attrs, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-breadcrumb--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const nav = frame.getByTestId('breadcrumb')
    await expect(nav).toHaveJSProperty('tagName', 'NAV')
    await expect(nav).toHaveAttribute('role', 'navigation')
    await expect(nav).toHaveAttribute('aria-label', 'breadcrumb')

    const list = frame.getByTestId('breadcrumb__list')
    await expect(list).toHaveJSProperty('tagName', 'OL')

    const items = frame.getByTestId('breadcrumb__item')
    await expect(items).toHaveCount(4)
    await expect(items.first()).toHaveJSProperty('tagName', 'LI')

    const links = frame.getByTestId('breadcrumb__link')
    await expect(links).toHaveCount(2)
    await expect(links.first()).toHaveJSProperty('tagName', 'A')
    await expect(links.first()).toHaveAttribute('href', '#')

    await expect(frame.getByTestId('breadcrumb__separator')).toHaveCount(3)

    const pageEl = frame.getByTestId('breadcrumb__page')
    await expect(pageEl).toHaveText('Videos')
    await expect(pageEl).toHaveAttribute('aria-current', 'page')

    const ellipsis = frame.getByTestId('breadcrumb__ellipsis')
    await expect(ellipsis).toHaveAttribute('aria-hidden', 'true')
    await expect(ellipsis.getByText('More')).toBeAttached()

    expect(errors).toEqual([])
  })
})
