import { test, expect } from '@playwright/test'

test.describe('Badge', () => {
  test('Default story renders a rounded badge without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-display-badge--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const badge = frame.locator('.q-badge')

    await expect(badge).toBeVisible()
    await expect(badge).toHaveText('3')
    await expect(badge).toHaveCSS('border-radius', /^\d/)

    expect(errors).toEqual([])
  })

  test('Variants story renders all four variants', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-badge--variants')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByText('Primary', { exact: true })).toBeVisible()
    await expect(frame.getByText('Secondary', { exact: true })).toBeVisible()
    await expect(frame.getByText('Destructive', { exact: true })).toBeVisible()
    await expect(frame.getByText('Outline', { exact: true })).toBeVisible()
  })

  test('Sizes story renders three differently sized badges', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-badge--sizes')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const badges = frame.locator('.q-badge')

    await expect(badges).toHaveCount(3)
    const boxes = await Promise.all([
      badges.nth(0).boundingBox(),
      badges.nth(1).boundingBox(),
      badges.nth(2).boundingBox()
    ])
    const heights = boxes.map((b) => b?.height)
    expect(new Set(heights).size).toBe(3)
  })
})
