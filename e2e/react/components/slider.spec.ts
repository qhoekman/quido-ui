import { test, expect } from '@playwright/test'

test.describe('Slider', () => {
  test('Default story renders at the initial value, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-manipulation-slider--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('slider')).toBeVisible()
    await expect(frame.getByTestId('slider__track')).toBeVisible()
    await expect(frame.getByTestId('slider__thumb')).toHaveAttribute(
      'aria-valuenow',
      '50'
    )

    expect(errors).toEqual([])
  })

  test('thumb moves with arrow keys', async ({ page }) => {
    await page.goto('?path=/story/components-data-manipulation-slider--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const thumb = frame.getByTestId('slider__thumb')

    await thumb.focus()
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('ArrowRight')

    await expect(thumb).toHaveAttribute('aria-valuenow', '70')
  })
})
