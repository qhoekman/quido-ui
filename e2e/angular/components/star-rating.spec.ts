import { test, expect } from '@playwright/test'

test.describe('Star Rating', () => {
  test('Default story fills the first 3 of 5 stars, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-feedback-star-rating--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const stars = frame.getByTestId('star-rating__star')

    await expect(stars).toHaveCount(5)
    for (let i = 0; i < 3; i++) {
      await expect(stars.nth(i)).toHaveClass(/variant--filled/)
    }
    for (let i = 3; i < 5; i++) {
      await expect(stars.nth(i)).toHaveClass(/variant--unfilled/)
    }

    expect(errors).toEqual([])
  })

  test('regression: rating and stars args control the filled count and total', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-feedback-star-rating--default&args=rating:0;stars:3'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const stars = frame.getByTestId('star-rating__star')

    await expect(stars).toHaveCount(3)
    const filledCount = await stars.evaluateAll(
      (els) => els.filter((el) => el.classList.contains('variant--filled')).length
    )
    expect(filledCount).toBe(0)
  })
})
