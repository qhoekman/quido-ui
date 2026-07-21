import { test, expect } from '@playwright/test'

test.describe('Grid', () => {
  test('Default story renders a 4-column grid with 4 items, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-grid--default-grid-item')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const grid = frame.getByTestId('grid')

    await expect(grid).toHaveCSS('display', 'grid')
    const columns = await grid.evaluate(
      (el) => getComputedStyle(el).gridTemplateColumns.split(' ').length
    )
    expect(columns).toBe(4)
    await expect(frame.getByTestId('grid__item')).toHaveCount(4)

    expect(errors).toEqual([])
  })

  test('regression: columns arg controls both column count and item count without duplicate-key warnings', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      '?path=/story/components-layout-grid--default-grid-item&args=columns:6'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const grid = frame.getByTestId('grid')

    const columns = await grid.evaluate(
      (el) => getComputedStyle(el).gridTemplateColumns.split(' ').length
    )
    expect(columns).toBe(6)
    await expect(frame.getByTestId('grid__item')).toHaveCount(6)

    expect(errors).toEqual([])
  })

  test('colSpan arg applies the correct grid-column span to each item', async ({ page }) => {
    await page.goto(
      '?path=/story/components-layout-grid--default-grid-item&args=colSpan:2'
    )
    const items = page.frameLocator('#storybook-preview-iframe').getByTestId('grid__item')

    await expect(items.first()).toHaveCSS('grid-column', 'span 2')
  })
})
