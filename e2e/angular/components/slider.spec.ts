import { test, expect } from '@playwright/test'

test.describe('Slider', () => {
  test('Default story renders the thumb at its initial value, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-slider--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('slider__track')).toBeVisible()
    await expect(frame.getByTestId('slider__thumb')).toBeVisible()
    await expect(frame.getByTestId('slider__input')).toHaveAttribute('value', '50')

    expect(errors).toEqual([])
  })

  test('regression: clicking the track moves the thumb and updates the value, rounded to the nearest step', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-slider--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const track = frame.getByTestId('slider__track')

    const box = await track.boundingBox()
    if (!box) throw new Error('track has no bounding box')

    await page.mouse.click(box.x + box.width * 0.8, box.y + box.height / 2)

    await expect(frame.getByTestId('slider__input')).toHaveAttribute('value', '80')
  })

  test('dragging the thumb updates the value continuously', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-slider--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const track = frame.getByTestId('slider__track')

    const box = await track.boundingBox()
    if (!box) throw new Error('track has no bounding box')

    await page.mouse.move(box.x + box.width * 0.5, box.y + box.height / 2)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width * 0.2, box.y + box.height / 2, { steps: 5 })
    await page.mouse.up()

    await expect(frame.getByTestId('slider__input')).toHaveAttribute('value', '20')
  })
})
