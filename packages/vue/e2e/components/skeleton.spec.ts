import { test, expect } from '@playwright/test'

test.describe('Skeleton', () => {
  test('Default story renders three pulsing skeleton placeholders, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-feedback-skeleton--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const skeletons = frame.getByTestId('qui-skeleton')

    await expect(skeletons).toHaveCount(3)
    for (let i = 0; i < 3; i++) {
      const animationName = await skeletons
        .nth(i)
        .evaluate((el) => getComputedStyle(el).animationName)
      expect(animationName).toBe('pulse')
    }

    expect(errors).toEqual([])
  })
})
