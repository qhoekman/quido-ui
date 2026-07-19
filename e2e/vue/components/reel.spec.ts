import { test, expect } from '@playwright/test'

test.describe('Reel', () => {
  test('Default story renders items and next button is enabled when content overflows', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-ecommerce-components-reel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('.q-reel-item')).toHaveCount(10)
    await expect(frame.locator('.direction--prev')).toBeDisabled()
    await expect(frame.locator('.direction--next')).toBeEnabled()

    expect(errors).toEqual([])
  })

  test('clicking next scrolls the content and enables the prev button', async ({ page }) => {
    await page.goto('?path=/story/features-ecommerce-components-reel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.locator('.q-reel-content')

    const initialScrollLeft = await content.evaluate((el) => el.scrollLeft)
    await frame.locator('.direction--next').click()

    await expect
      .poll(() => content.evaluate((el) => el.scrollLeft), { timeout: 3000 })
      .toBeGreaterThan(initialScrollLeft)
    await expect(frame.locator('.direction--prev')).toBeEnabled()
  })
})
