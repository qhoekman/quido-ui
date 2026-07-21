import { test, expect } from '@playwright/test'

test.describe('Pagination', () => {
  test('Default story renders nav with correct items, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-pagination--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const nav = frame.getByTestId('pagination')
    await expect(nav).toBeVisible()
    await expect(nav).toHaveJSProperty('tagName', 'NAV')
    await expect(nav).toHaveAttribute('aria-label', 'pagination')

    await expect(frame.getByTestId('pagination__item')).toHaveCount(6)
    await expect(frame.getByTestId('pagination__link')).toHaveCount(3)
    await expect(frame.getByTestId('pagination__ellipsis')).toBeVisible()
    await expect(frame.getByTestId('pagination__previous')).toBeVisible()
    await expect(frame.getByTestId('pagination__next')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: active link has aria-current, inactive links do not', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-pagination--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const links = frame.getByTestId('pagination__link')
    await expect(links.nth(0)).toHaveAttribute('aria-current', 'page')
    await expect(links.nth(1)).not.toHaveAttribute('aria-current')
    await expect(links.nth(2)).not.toHaveAttribute('aria-current')
  })
})
