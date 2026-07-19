import { test, expect } from '@playwright/test'

test.describe('Range', () => {
  test('Default story renders track and both thumbs, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-manipulation-range--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('range')).toBeVisible()
    await expect(frame.getByTestId('range__track')).toBeVisible()
    await expect(frame.getByTestId('range__thumb-0')).toHaveAttribute(
      'aria-valuenow',
      '0'
    )
    await expect(frame.getByTestId('range__thumb-1')).toHaveAttribute(
      'aria-valuenow',
      '100'
    )

    expect(errors).toEqual([])
  })

  test('left thumb moves with arrow keys', async ({ page }) => {
    await page.goto('?path=/story/components-data-manipulation-range--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const thumb = frame.getByTestId('range__thumb-0')

    await thumb.focus()
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('ArrowRight')

    await expect(thumb).toHaveAttribute('aria-valuenow', '20')
  })
})
