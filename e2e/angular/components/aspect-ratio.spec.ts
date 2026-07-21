import { test, expect } from '@playwright/test'

test.describe('Aspect Ratio', () => {
  test('Default story renders with the correct 16/9 ratio, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-aspect-ratio--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const box = frame.getByTestId('aspect-ratio')

    await expect(box).toBeVisible()
    const rect = await box.evaluate((el) => el.getBoundingClientRect())
    expect(rect.width / rect.height).toBeCloseTo(16 / 9, 1)

    expect(errors).toEqual([])
  })
})
