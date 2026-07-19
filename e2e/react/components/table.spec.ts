import { test, expect } from '@playwright/test'

test.describe('Table', () => {
  test('Default story renders header, rows, and footer', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-application-components-table--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('table')).toBeVisible()
    await expect(frame.getByTestId('table__caption')).toHaveText(
      'A list of your recent invoices.'
    )
    await expect(frame.getByTestId('table__head')).toHaveCount(4)
    await expect(frame.getByTestId('table__row')).toHaveCount(9)
    await expect(frame.getByTestId('table__footer')).toContainText('$2,500.00')

    expect(errors).toEqual([])
  })

  test('WithSelectedRow story marks the selected row', async ({ page }) => {
    await page.goto(
      '?path=/story/features-application-components-table--with-selected-row'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    const rows = frame.getByTestId('table__body').getByTestId('table__row')
    await expect(rows.nth(2)).toHaveAttribute('data-state', 'selected')
    await expect(rows.nth(0)).not.toHaveAttribute('data-state', 'selected')
  })
})
