import { test, expect } from '@playwright/test'

test.describe('Reel', () => {
  test('Default story renders 10 items without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-reel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('reel')).toBeVisible()
    await expect(frame.getByTestId('reel__item')).toHaveCount(10)

    expect(errors).toEqual([])
  })

  test('clicking next scrolls the content forward', async ({ page }) => {
    await page.goto('?path=/story/components-data-display-reel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.getByTestId('reel__content')

    const initialScrollLeft = await content.evaluate((el) => el.scrollLeft)
    await frame.getByTestId('reel__next').click()

    await expect
      .poll(() => content.evaluate((el) => el.scrollLeft), { timeout: 3000 })
      .toBeGreaterThan(initialScrollLeft)
  })
})
