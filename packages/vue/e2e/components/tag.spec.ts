import { test, expect } from '@playwright/test'

test.describe('Tag', () => {
  test('Default story renders a tag without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-display-tag--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('qui-tag')).toHaveText('Tag Content')

    expect(errors).toEqual([])
  })

  test('Variants story renders all four variants', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-tag--variants')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const tags = frame.getByTestId('qui-tag')

    await expect(tags).toHaveCount(4)
    await expect(tags.nth(0)).toHaveClass(/variant--primary/)
    await expect(tags.nth(1)).toHaveClass(/variant--secondary/)
    await expect(tags.nth(2)).toHaveClass(/variant--destructive/)
    await expect(tags.nth(3)).toHaveClass(/variant--outline/)
  })

  test('Shapes story renders pill and plate shapes with different border radii', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-tag--shapes')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const tags = frame.getByTestId('qui-tag')

    await expect(tags).toHaveCount(2)
    const [pillRadius, plateRadius] = await Promise.all([
      tags.nth(0).evaluate((el) => getComputedStyle(el).borderRadius),
      tags.nth(1).evaluate((el) => getComputedStyle(el).borderRadius)
    ])
    expect(pillRadius).not.toBe(plateRadius)
  })
})
