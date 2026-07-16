import { test, expect } from '@playwright/test'

test.describe('Grid', () => {
  test('Default story renders a 4-column grid with 4 items, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-layout-grid--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const grid = frame.getByTestId('qui-grid')

    await expect(grid).toHaveCSS('display', 'grid')
    const columns = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(' ').length)
    expect(columns).toBe(4)
    await expect(frame.getByTestId('qui-grid-item')).toHaveCount(4)

    expect(errors).toEqual([])
  })

  test('ThreeColumns story renders 3 columns', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-layout-grid--three-columns')
    const grid = page.frameLocator('#storybook-preview-iframe').getByTestId('qui-grid')
    const columns = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(' ').length)
    expect(columns).toBe(3)
  })

  test('SixColumns story renders 6 columns', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-layout-grid--six-columns')
    const grid = page.frameLocator('#storybook-preview-iframe').getByTestId('qui-grid')
    const columns = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(' ').length)
    expect(columns).toBe(6)
  })

  test('WithColSpan story applies the correct grid-column span per item', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-layout-grid--with-col-span')
    const items = page.frameLocator('#storybook-preview-iframe').getByTestId('qui-grid-item')

    await expect(items).toHaveCount(3)
    await expect(items.nth(0)).toHaveCSS('grid-column', 'span 2')
    await expect(items.nth(1)).toHaveCSS('grid-column', 'span 1')
    await expect(items.nth(2)).toHaveCSS('grid-column', 'span 1')
  })
})
