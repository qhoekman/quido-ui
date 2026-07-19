import { test, expect } from '@playwright/test'

test.describe('Pagination', () => {
  test('Default story renders the full compound structure with correct a11y attrs, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-website-components-pagination--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const nav = frame.locator('.q-pagination')
    await expect(nav).toHaveJSProperty('tagName', 'NAV')
    await expect(nav).toHaveAttribute('role', 'navigation')
    await expect(nav).toHaveAttribute('aria-label', 'pagination')
    await expect(nav).toHaveCSS('display', 'flex')

    await expect(frame.locator('.q-pagination-item')).toHaveCount(6)

    const links = frame.locator('.q-pagination-link')
    await expect(links).toHaveText(['Previous', '1', '2', '10', 'Next'])

    const active = frame.locator('.q-pagination-link[aria-current="page"]')
    await expect(active).toHaveCount(1)
    await expect(active).toHaveText('1')

    const ellipsis = frame.locator('.q-pagination-ellipsis')
    await expect(ellipsis).toBeVisible()
    await expect(ellipsis).toHaveAttribute('aria-hidden', 'true')

    const prev = frame.locator('.q-pagination-previous')
    await expect(prev).toHaveAttribute('aria-label', 'Go to previous page')
    const next = frame.locator('.q-pagination-next')
    await expect(next).toHaveAttribute('aria-label', 'Go to next page')

    expect(errors).toEqual([])
  })
})
