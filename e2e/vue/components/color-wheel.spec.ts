import { test, expect } from '@playwright/test'

test.describe('ColorWheel', () => {
  test('Default story renders 360 segments and the indicator, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-color-wheel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const wheel = frame.getByTestId('qui-color-wheel')

    await expect(wheel).toBeVisible()
    await expect(wheel.locator('path')).toHaveCount(360)
    await expect(frame.getByText('Selected: hsl(0, 100%, 50%)')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('clicking the wheel updates the selected color', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-color-wheel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const wheel = frame.getByTestId('qui-color-wheel')

    const box = await wheel.boundingBox()
    await page.mouse.click(box!.x + box!.width / 2, box!.y + 5)

    await expect(frame.getByText(/^Selected: hsl\(/)).not.toHaveText('Selected: hsl(0, 100%, 50%)')
  })

  test('WithCustomHue story positions the indicator per the hue/saturation props', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-color-wheel--with-custom-hue'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByText('Selected: hsl(180, 80%, 50%)')).toBeVisible()
  })
})
