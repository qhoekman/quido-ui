import { test, expect } from '@playwright/test'

test.describe('SpotlightGallery', () => {
  test('Default story renders a spotlight image and thumbnails without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      '?path=/story/components-data-display-spotlight-gallery--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-spotlight-gallery-content')).toBeVisible()
    await expect(frame.getByTestId('qui-spotlight-gallery-trigger')).toHaveCount(3)
    await expect(
      frame.getByTestId('qui-spotlight-gallery-content').getByAltText('Image 1')
    ).toBeVisible()
    await expect(frame.getByTestId('qui-spotlight-gallery-trigger').first()).toHaveClass(/active/)

    expect(errors).toEqual([])
  })

  test('clicking a thumbnail switches the spotlight image and active state', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-display-spotlight-gallery--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.getByTestId('qui-spotlight-gallery-trigger')

    await triggers.nth(2).click()

    await expect(triggers.nth(2)).toHaveClass(/active/)
    await expect(triggers.nth(0)).not.toHaveClass(/active/)
    await expect(
      frame.getByTestId('qui-spotlight-gallery-content').getByAltText('Image 3')
    ).toBeVisible()
  })

  test('ArrowRight/ArrowLeft keyboard navigation moves the active index', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-display-spotlight-gallery--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.getByTestId('qui-spotlight-gallery-trigger')

    await triggers.first().focus()
    await page.keyboard.press('ArrowRight')
    await expect(triggers.nth(1)).toHaveClass(/active/)

    await page.keyboard.press('ArrowLeft')
    await expect(triggers.nth(0)).toHaveClass(/active/)
  })
})
