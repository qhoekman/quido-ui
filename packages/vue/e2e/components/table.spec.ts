import { test, expect } from '@playwright/test'

test.describe('Table', () => {
  test('Default story renders with rows, caption, and footer', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-table--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-table')).toBeVisible()
    await expect(frame.getByText('A list of your recent invoices.')).toBeVisible()
    await expect(frame.getByRole('row')).not.toHaveCount(0)
    await expect(frame.getByText('INV001')).toBeVisible()
    await expect(frame.getByText('Total')).toBeVisible()
    await expect(frame.getByText('$2,500.00')).toBeVisible()
  })

  test('WithSelectedRow story marks the selected row', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-table--with-selected-row')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-table')).toBeVisible()
    const selectedRow = frame.locator('tr[data-state="selected"]')
    await expect(selectedRow).toHaveCount(1)
    await expect(selectedRow).toContainText('INV003')
  })
})
