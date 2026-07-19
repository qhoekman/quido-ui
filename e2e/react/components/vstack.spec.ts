import { test, expect } from '@playwright/test'

test.describe('VStack', () => {
  test('Default story renders children in a column without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-layout-vstack--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const vstack = frame.getByTestId('vstack')

    await expect(vstack).toBeVisible()
    await expect(vstack).toHaveCSS('flex-direction', 'column')

    const cards = frame.getByTestId('card')
    await expect(cards).toHaveCount(5)

    const box1 = await cards.nth(0).boundingBox()
    const box2 = await cards.nth(1).boundingBox()
    expect(box1).not.toBeNull()
    expect(box2).not.toBeNull()
    expect(box2!.y).toBeGreaterThan(box1!.y)

    expect(errors).toEqual([])
  })
})
