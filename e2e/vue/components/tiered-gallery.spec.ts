import { test, expect } from '@playwright/test'

test.describe('TieredGallery', () => {
  test('renders all 5 trigger thumbnails and the default active content image', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-ecommerce-components-tiered-gallery--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('.q-tiered-gallery__trigger img')).toHaveCount(5)
    const contentImage = frame.locator('.q-tiered-gallery__content img')
    await expect(contentImage).toHaveCount(1)

    expect(errors).toEqual([])
  })

  test('clicking a trigger switches the active content image', async ({ page }) => {
    await page.goto('?path=/story/features-ecommerce-components-tiered-gallery--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const triggers = frame.locator('.q-tiered-gallery__trigger')
    const contentImgBefore = await frame
      .locator('.q-tiered-gallery__content img')
      .first()
      .getAttribute('src')

    await triggers.nth(2).click()

    const contentImage = frame.locator('.q-tiered-gallery__content img').first()
    await expect(contentImage).not.toHaveAttribute('src', contentImgBefore ?? '')
  })
})
