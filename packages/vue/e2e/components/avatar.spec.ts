import { test, expect } from '@playwright/test'

test.describe('Avatar', () => {
  test('Default story renders a circular, clipped avatar without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-display-avatar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const avatar = frame.locator('.q-avatar')

    await expect(avatar).toBeVisible()
    await expect(avatar).toHaveCSS('overflow', 'hidden')
    await expect(avatar).toHaveCSS('border-radius', /^\d/)

    const box = await avatar.boundingBox()
    expect(box?.width).toBeLessThan(100)
    expect(box?.height).toBeLessThan(100)

    expect(errors).toEqual([])
  })

  test('Fallback story shows initials in a circular avatar when the image fails to load', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-avatar--fallback')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const avatar = frame.locator('.q-avatar')

    await expect(frame.getByText('JD')).toBeVisible()
    const box = await avatar.boundingBox()
    expect(box?.width).toBeLessThan(100)
  })

  test('Sizes story renders three differently sized avatars', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-avatar--sizes')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const avatars = frame.locator('.q-avatar')

    await expect(avatars).toHaveCount(3)
    const boxes = await Promise.all([
      avatars.nth(0).boundingBox(),
      avatars.nth(1).boundingBox(),
      avatars.nth(2).boundingBox()
    ])
    const widths = boxes.map((b) => b?.width)
    expect(new Set(widths).size).toBe(3)
  })
})
