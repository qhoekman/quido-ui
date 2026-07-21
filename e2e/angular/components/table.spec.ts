import { test, expect } from '@playwright/test'

test.describe('Table', () => {
  test('Default story renders with rows, caption, and footer without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-table--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('table')).toBeVisible()
    await expect(
      frame.getByText('A list of your recent invoices.')
    ).toBeVisible()
    await expect(frame.getByTestId('table__row')).toHaveCount(7)
    await expect(frame.getByText('DOD101')).toBeVisible()
    await expect(frame.getByText('Total')).toBeVisible()
    await expect(frame.getByText('$2,475.00')).toBeVisible()

    expect(errors).toEqual([])
  })
})
