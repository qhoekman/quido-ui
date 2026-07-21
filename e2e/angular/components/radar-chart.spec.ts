import { test, expect } from '@playwright/test'

test.describe('RadarChart', () => {
  test('Default story renders the radar series without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-charts-radar-chart--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('svg.apexcharts-svg')).toBeVisible()
    await expect(
      frame.getByText('Total Visitors for the Last 6 Months')
    ).toBeVisible()
    await expect(
      frame.locator('.apexcharts-radar-series path.apexcharts-radar')
    ).toHaveCount(2)
    await expect(
      frame.locator('.apexcharts-xaxis-label').filter({ hasText: 'January' })
    ).toBeVisible()

    expect(errors).toEqual([])
  })
})
