import { test, expect } from '@playwright/test'

test.describe('Carousel', () => {
  test('Default story renders 5 items with prev disabled initially', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-website-components-carousel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('carousel')).toBeVisible()
    await expect(frame.getByTestId('carousel__item')).toHaveCount(5)
    await expect(frame.getByTestId('carousel__prev')).toBeDisabled()
    await expect(frame.getByTestId('carousel__next')).toBeEnabled()

    expect(errors).toEqual([])
  })

  test('clicking next enables the prev button', async ({ page }) => {
    await page.goto('?path=/story/features-website-components-carousel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('carousel__next').click()
    await expect(frame.getByTestId('carousel__prev')).toBeEnabled()
  })
})
