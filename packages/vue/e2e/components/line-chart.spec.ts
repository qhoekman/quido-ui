import { test, expect } from '@playwright/test'

test.describe('LineChart', () => {
  test('Default story renders the line series without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-charts-line-chart--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('.q-line-chart svg.apexcharts-svg')).toBeVisible()
    await expect(frame.getByText('Monthly Data')).toBeVisible()
    await expect(frame.locator('.apexcharts-line-series path.apexcharts-line')).toHaveCount(1)

    expect(errors).toEqual([])
  })
})
