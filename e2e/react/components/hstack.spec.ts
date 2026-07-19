import { test, expect } from '@playwright/test'

test.describe('HStack', () => {
  test('Default story renders children in a row without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-layout-hstack--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const hstack = frame.getByTestId('hstack')

    await expect(hstack).toBeVisible()
    await expect(hstack).toHaveCSS('display', 'flex')

    const cards = frame.getByTestId('card')
    await expect(cards).toHaveCount(5)

    const box1 = await cards.nth(0).boundingBox()
    const box2 = await cards.nth(1).boundingBox()
    expect(box1).not.toBeNull()
    expect(box2).not.toBeNull()
    expect(box2!.x).toBeGreaterThan(box1!.x)

    expect(errors).toEqual([])
  })
})
