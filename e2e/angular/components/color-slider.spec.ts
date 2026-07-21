import { test, expect } from '@playwright/test'

test.describe('ColorSlider', () => {
  test('Default story renders the track, range, and thumb without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-color-slider--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('color-slider__track')).toBeVisible()
    await expect(frame.getByTestId('color-slider__thumb')).toBeVisible()
    await expect(frame.getByTestId('color-slider__input')).toHaveValue('50')

    expect(errors).toEqual([])
  })

  test('clicking the track moves the thumb to that position', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-color-slider--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const track = frame.getByTestId('color-slider__track')
    const thumb = frame.getByTestId('color-slider__thumb')

    const initialLeft = await thumb.evaluate(
      (el) => (el as HTMLElement).style.left
    )
    const box = await track.boundingBox()
    await page.mouse.click(box!.x + box!.width * 0.9, box!.y + box!.height / 2)

    await expect
      .poll(() => thumb.evaluate((el) => (el as HTMLElement).style.left))
      .not.toBe(initialLeft)
  })
})
