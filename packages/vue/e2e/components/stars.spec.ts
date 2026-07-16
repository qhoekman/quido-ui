import { test, expect } from '@playwright/test'

test.describe('Stars', () => {
  test('Default story fills the first 4 of 5 stars, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/features-ecommerce-components-stars--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const stars = frame.locator('.q-star')

    await expect(stars).toHaveCount(5)
    for (let i = 0; i < 4; i++) {
      await expect(stars.nth(i)).toHaveClass(/variant--filled/)
    }
    await expect(stars.nth(4)).toHaveClass(/variant--unfilled/)

    expect(errors).toEqual([])
  })

  test('DifferentRatings story renders 0 through 5 filled stars correctly', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/features-ecommerce-components-stars--different-ratings'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const groups = frame.locator('.q-stars')

    await expect(groups).toHaveCount(6)
    for (let rating = 0; rating <= 5; rating++) {
      const stars = groups.nth(rating).locator('.q-star')
      const filledCount = await stars.evaluateAll(
        (els) => els.filter((el) => el.classList.contains('variant--filled')).length
      )
      expect(filledCount).toBe(rating)
    }
  })

  test('DifferentStarCounts story renders 3, 5, and 10 total stars', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/features-ecommerce-components-stars--different-star-counts'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const groups = frame.locator('.q-stars')

    await expect(groups).toHaveCount(3)
    await expect(groups.nth(0).locator('.q-star')).toHaveCount(3)
    await expect(groups.nth(1).locator('.q-star')).toHaveCount(5)
    await expect(groups.nth(2).locator('.q-star')).toHaveCount(10)
  })

  test('documents current behavior: a fractional rating rounds up to the next whole filled star', async ({
    page
  }) => {
    // No partial/half-star rendering exists; `index < rating` means any
    // fractional excess (e.g. 3.1) fills one extra whole star, identical to
    // a 4.0 rating. Locking this in since there's no reference impl to
    // compare against and no spec for "correct" fractional behavior.
    await page.goto('http://localhost:6006/?path=/story/features-ecommerce-components-stars--default')
    const stars = page.frameLocator('#storybook-preview-iframe').locator('.q-star')

    const ratingInput = page.locator('input[type="number"]').first()
    await ratingInput.fill('3.1')
    await ratingInput.blur()

    const filledCount = await stars.evaluateAll(
      (els) => els.filter((el) => el.classList.contains('variant--filled')).length
    )
    expect(filledCount).toBe(4)
  })
})
