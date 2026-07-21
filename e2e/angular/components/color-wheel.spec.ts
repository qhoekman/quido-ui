import { test, expect } from '@playwright/test'

test.describe('ColorWheel', () => {
  test('Default story renders 360 segments and the indicator, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-color-wheel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const wheel = frame.getByTestId('color-wheel')

    await expect(wheel).toBeVisible()
    await expect(wheel.locator('path')).toHaveCount(360)
    await expect(wheel.locator('circle')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('clicking the wheel updates the indicator position', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-color-wheel--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const wheel = frame.getByTestId('color-wheel')
    const indicator = wheel.locator('circle')

    const initialCx = await indicator.getAttribute('cx')
    const box = await wheel.boundingBox()
    await page.mouse.click(box!.x + box!.width / 2, box!.y + 5)

    await expect
      .poll(() => indicator.getAttribute('cx'))
      .not.toBe(initialCx)
  })
})
