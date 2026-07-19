import { test, expect } from '@playwright/test'

const cases: Array<{ story: string; ratio: number; label: string }> = [
  { story: 'default', ratio: 16 / 9, label: '16/9' },
  { story: 'square', ratio: 1, label: '1/1' },
  { story: 'portrait', ratio: 3 / 4, label: '3/4' },
  { story: 'landscape', ratio: 21 / 9, label: '21/9' }
]

test.describe('Aspect Ratio', () => {
  test('Default story renders with the correct 16/9 ratio, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-aspect-ratio--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const box = frame.getByTestId('qui-aspect-ratio')

    await expect(box).toBeVisible()
    const rect = await box.evaluate((el) => el.getBoundingClientRect())
    expect(rect.width / rect.height).toBeCloseTo(16 / 9, 1)

    expect(errors).toEqual([])
  })

  for (const { story, ratio, label } of cases) {
    test(`${story} story renders the ${label} ratio correctly`, async ({ page }) => {
      await page.goto(`/?path=/story/components-layout-aspect-ratio--${story}`)
      const box = page.frameLocator('#storybook-preview-iframe').getByTestId('qui-aspect-ratio')

      const rect = await box.evaluate((el) => el.getBoundingClientRect())
      expect(rect.width / rect.height).toBeCloseTo(ratio, 1)
    })
  }
})
