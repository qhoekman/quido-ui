import { test, expect } from '@playwright/test'

test.describe('PieChart', () => {
  test('Default story renders five slices without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-charts-pie-chart--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('.q-pie-chart svg.apexcharts-svg')).toBeVisible()
    await expect(frame.getByText('Browser Market Share')).toBeVisible()
    await expect(frame.locator('.apexcharts-pie-series path')).toHaveCount(5)
    await expect(frame.getByText('Chrome')).toBeVisible()

    expect(errors).toEqual([])
  })
})
