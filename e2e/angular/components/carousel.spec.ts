import { test, expect } from '@playwright/test'

test.describe('Carousel', () => {
  test('Default story renders 5 items with prev/next buttons, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-carousel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.getByTestId('carousel__content')
    const items = frame.getByTestId('carousel__item')
    const buttons = frame.getByTestId('carousel__button')

    await expect(content).toBeVisible()
    await expect(items).toHaveCount(5)
    await expect(buttons).toHaveCount(2)

    expect(errors).toEqual([])
  })

  test('regression: clicking next advances the carousel and updates the transform', async ({
    page
  }) => {
    await page.goto('?path=/story/components-layout-carousel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.getByTestId('carousel__content')
    const buttons = frame.getByTestId('carousel__button')

    await buttons.nth(1).click()

    const transform = await content.evaluate(
      (el) => (el as HTMLElement).style.transform
    )
    expect(transform).toBe('translateX(-100%)')
  })

  test('clicking prev moves back to the previous item', async ({ page }) => {
    await page.goto('?path=/story/components-layout-carousel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.getByTestId('carousel__content')
    const buttons = frame.getByTestId('carousel__button')

    await buttons.nth(1).click()
    await buttons.nth(1).click()
    await buttons.nth(0).click()

    const transform = await content.evaluate(
      (el) => (el as HTMLElement).style.transform
    )
    expect(transform).toBe('translateX(-100%)')
  })
})
