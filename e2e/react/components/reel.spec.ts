import { test, expect } from '@playwright/test'

test.describe('Reel', () => {
  test('Default story renders 30 items with prev/next buttons', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-ecommerce-components-reel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('reel')).toBeVisible()
    await expect(frame.getByTestId('reel__items')).toBeVisible()
    await expect(frame.getByTestId('reel__item')).toHaveCount(30)
    await expect(frame.getByTestId('reel__button-prev')).toBeVisible()
    await expect(frame.getByTestId('reel__button-next')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('clicking next scrolls the reel forward', async ({ page }) => {
    await page.goto('?path=/story/features-ecommerce-components-reel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const scrollLeftBefore = await frame
      .getByTestId('reel__items')
      .evaluate((el) => el.scrollLeft)

    await frame.getByTestId('reel__button-next').click()
    await expect(async () => {
      const scrollLeftAfter = await frame
        .getByTestId('reel__items')
        .evaluate((el) => el.scrollLeft)
      expect(scrollLeftAfter).toBeGreaterThan(scrollLeftBefore)
    }).toPass()
  })
})
