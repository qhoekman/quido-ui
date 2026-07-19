import { test, expect } from '@playwright/test'

test.describe('Statistic', () => {
  test('Default story renders label, value, trend, and helper text without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-statistic--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-statistic-label')).toHaveText('Active Users')
    await expect(frame.getByTestId('qui-statistic-value')).toHaveText('2,338')
    await expect(frame.getByTestId('qui-statistic-trend')).toHaveClass(/variant--up/)
    await expect(frame.getByTestId('qui-statistic-trend')).toContainText('+180')
    await expect(frame.getByTestId('qui-statistic-helper-text')).toHaveText('New users this week')

    expect(errors).toEqual([])
  })

  test('down variant applies destructive-colored trend styling', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-display-statistic--default&args=variant:down'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trend = frame.getByTestId('qui-statistic-trend')

    await expect(trend).toHaveClass(/variant--down/)
    await expect(trend).toContainText('-180')
  })
})
