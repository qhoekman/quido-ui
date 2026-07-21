import { test, expect } from '@playwright/test'

test.describe('DonutChart', () => {
  test('Default story renders five segments without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-charts-donut-chart--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('svg.apexcharts-svg')).toBeVisible()
    await expect(frame.getByText('Monthly Visitors')).toBeVisible()
    await expect(frame.locator('.apexcharts-pie-series path')).toHaveCount(5)
    await expect(frame.getByText('January')).toBeVisible()

    expect(errors).toEqual([])
  })
})
