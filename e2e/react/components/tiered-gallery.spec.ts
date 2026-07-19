import { test, expect } from '@playwright/test'

test.describe('TieredGallery', () => {
  test('Default story renders 5 triggers and image 0 active', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto(
      '?path=/story/features-ecommerce-components-tiered-gallery--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('tiered-gallery')).toBeVisible()
    await expect(frame.getByTestId('tiered-gallery__list')).toBeVisible()
    await expect(
      frame.locator('[data-testid^="tiered-gallery__trigger-"]')
    ).toHaveCount(5)
    await expect(frame.getByTestId('tiered-gallery__content-0')).toHaveAttribute(
      'data-state',
      'active'
    )

    expect(errors).toEqual([])
  })

  test('clicking a trigger switches the active gallery image', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/features-ecommerce-components-tiered-gallery--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('tiered-gallery__trigger-2').click()
    await expect(frame.getByTestId('tiered-gallery__content-2')).toHaveAttribute(
      'data-state',
      'active'
    )
    await expect(frame.getByTestId('tiered-gallery__content-0')).toHaveAttribute(
      'data-state',
      'inactive'
    )
  })
})
