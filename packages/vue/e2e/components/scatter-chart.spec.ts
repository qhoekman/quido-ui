import { test, expect } from '@playwright/test'

test.describe('ScatterChart', () => {
  test('Default story renders both series without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-charts-scatter-chart--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('.q-scatter-chart svg.apexcharts-svg')).toBeVisible()
    await expect(frame.getByText('Scatter Chart Example')).toBeVisible()
    await expect(frame.locator('.apexcharts-series')).toHaveCount(2)

    const markerCount = await frame.locator('path.apexcharts-marker').count()
    expect(markerCount).toBeGreaterThanOrEqual(10)

    expect(errors).toEqual([])
  })
})
