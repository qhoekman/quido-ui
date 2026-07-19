import { test, expect } from '@playwright/test'

test.describe('Hero', () => {
  test('WithContentLeft story renders tagline, title, body, actions, and image', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-website-components-hero--with-content-left')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('hero')).toBeVisible()
    await expect(frame.getByTestId('hero__tagline')).toHaveText('Tagline')
    await expect(frame.getByTestId('hero__title')).toContainText(
      'Medium length hero section title goes in here'
    )
    await expect(frame.getByTestId('hero__body')).toBeVisible()
    await expect(frame.getByTestId('hero__actions')).toBeVisible()
    await expect(frame.getByTestId('hero__section')).toHaveCount(2)

    expect(errors).toEqual([])
  })

  test('WithBackdrop story renders the backdrop image behind the content', async ({
    page
  }) => {
    await page.goto('?path=/story/features-website-components-hero--with-backdrop')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('hero__backdrop')).toBeVisible()
    await expect(frame.getByTestId('hero__backdrop-image')).toBeVisible()
  })

  test('WithCarousel story composes the Carousel component', async ({ page }) => {
    await page.goto('?path=/story/features-website-components-hero--with-carousel')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('hero')).toBeVisible()
    await expect(frame.getByTestId('carousel')).toBeVisible()
    await expect(frame.getByTestId('carousel__item')).toHaveCount(5)
  })
})
