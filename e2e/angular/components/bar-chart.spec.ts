import { test, expect } from '@playwright/test'

test.describe('BarChart', () => {
  test('Default story renders six bars without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-charts-bar-chart--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('svg.apexcharts-svg')).toBeVisible()
    await expect(frame.getByText('Monthly Data')).toBeVisible()
    await expect(
      frame.locator('.apexcharts-bar-series .apexcharts-bar-area')
    ).toHaveCount(6)

    expect(errors).toEqual([])
  })
})
