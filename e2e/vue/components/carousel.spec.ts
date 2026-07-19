import { test, expect } from '@playwright/test'

test.describe('Carousel', () => {
  test('Default story renders 5 items with prev disabled and next enabled, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-website-components-carousel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.locator('.q-carousel-content')
    const buttons = frame.locator('.q-carousel-button')

    await expect(content).toBeVisible()
    await expect(content).toHaveCSS('transform', /matrix|none/)
    await expect(buttons).toHaveCount(2)
    await expect(buttons.nth(0)).toBeDisabled()
    await expect(buttons.nth(1)).toBeEnabled()

    expect(errors).toEqual([])
  })

  test('regression: clicking next advances the carousel and updates the transform (ref-on-component bug)', async ({
    page
  }) => {
    await page.goto('?path=/story/features-website-components-carousel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.locator('.q-carousel-content')
    const buttons = frame.locator('.q-carousel-button')

    await expect(content).toHaveAttribute('style', /translateX\(0%\)/)

    await buttons.nth(1).click()
    await expect(content).toHaveAttribute('style', /translateX\(-100%\)/)
    await expect(buttons.nth(0)).toBeEnabled()
  })

  test('next button disables at the last item, prev button disables at the first', async ({
    page
  }) => {
    await page.goto('?path=/story/features-website-components-carousel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.locator('.q-carousel-content')
    const buttons = frame.locator('.q-carousel-button')

    for (let i = 0; i < 4; i++) {
      await buttons.nth(1).click()
    }

    await expect(content).toHaveAttribute('style', /translateX\(-400%\)/)
    await expect(buttons.nth(1)).toBeDisabled()
    await expect(buttons.nth(0)).toBeEnabled()

    for (let i = 0; i < 4; i++) {
      await buttons.nth(0).click()
    }

    await expect(content).toHaveAttribute('style', /translateX\(0%\)/)
    await expect(buttons.nth(0)).toBeDisabled()
    await expect(buttons.nth(1)).toBeEnabled()
  })
})
