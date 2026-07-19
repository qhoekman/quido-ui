import { test, expect } from '@playwright/test'

test.describe('AreaChart', () => {
  test('Default story renders both series without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-charts-area-chart--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('.q-area-chart svg.apexcharts-svg')).toBeVisible()
    await expect(frame.getByText('Monthly Data')).toBeVisible()
    await expect(frame.locator('.apexcharts-series[seriesname="Desktop"]')).toBeVisible()
    await expect(frame.locator('.apexcharts-series[seriesname="Mobile"]')).toBeVisible()
    await expect(frame.locator('tspan').filter({ hasText: 'January' })).toBeVisible()

    expect(errors).toEqual([])
  })
})
