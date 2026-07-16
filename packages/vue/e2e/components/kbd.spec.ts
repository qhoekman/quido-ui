import { test, expect } from '@playwright/test'

test.describe('Kbd', () => {
  test('Default story renders kbd elements without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-display-kbd--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const kbds = frame.locator('kbd.q-kbd')

    await expect(kbds).toHaveCount(2)
    await expect(kbds.nth(0)).toHaveText('CMD')
    await expect(kbds.nth(1)).toHaveText('K')

    expect(errors).toEqual([])
  })

  test('Sizes story renders three distinct kbd sizes', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-kbd--sizes')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const kbds = frame.locator('kbd.q-kbd')

    await expect(kbds).toHaveCount(6)
    const fontSizes = await Promise.all(
      [0, 2, 4].map((i) => kbds.nth(i).evaluate((el) => getComputedStyle(el).fontSize))
    )
    expect(new Set(fontSizes).size).toBe(3)
  })
})
