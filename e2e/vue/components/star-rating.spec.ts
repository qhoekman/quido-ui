import { test, expect } from '@playwright/test'

test.describe('Star Rating', () => {
  test('Default story fills the first 3 of 5 stars, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-feedback-star-rating--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const stars = frame.getByTestId('qui-star-rating-star')

    await expect(stars).toHaveCount(5)
    for (let i = 0; i < 3; i++) {
      await expect(stars.nth(i)).toHaveClass(/variant--filled/)
    }
    for (let i = 3; i < 5; i++) {
      await expect(stars.nth(i)).toHaveClass(/variant--unfilled/)
    }

    expect(errors).toEqual([])
  })

  test('DifferentRatings story renders 0 through 5 filled stars correctly', async ({ page }) => {
    await page.goto(
      '?path=/story/components-feedback-star-rating--different-ratings'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const groups = frame.getByTestId('qui-star-rating')

    await expect(groups).toHaveCount(6)
    for (let rating = 0; rating <= 5; rating++) {
      const stars = groups.nth(rating).getByTestId('qui-star-rating-star')
      const filledCount = await stars.evaluateAll(
        (els) => els.filter((el) => el.classList.contains('variant--filled')).length
      )
      expect(filledCount).toBe(rating)
    }
  })

  test('DifferentStarCounts story renders 3, 5, and 10 total stars', async ({ page }) => {
    await page.goto(
      '?path=/story/components-feedback-star-rating--different-star-counts'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const groups = frame.getByTestId('qui-star-rating')

    await expect(groups).toHaveCount(3)
    await expect(groups.nth(0).getByTestId('qui-star-rating-star')).toHaveCount(3)
    await expect(groups.nth(1).getByTestId('qui-star-rating-star')).toHaveCount(5)
    await expect(groups.nth(2).getByTestId('qui-star-rating-star')).toHaveCount(10)
  })
})
