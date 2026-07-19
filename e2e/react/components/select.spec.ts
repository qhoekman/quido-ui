import { test, expect } from '@playwright/test'

test.describe('Select', () => {
  test('Default story renders trigger with placeholder, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-manipulation-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('select__trigger')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('opens the dropdown and selects an item', async ({ page }) => {
    await page.goto('?path=/story/components-data-manipulation-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('select__trigger').click()
    await expect(frame.getByTestId('select__content')).toBeVisible()

    await frame.getByTestId('select__item-dark').click()

    await expect(frame.getByTestId('select__trigger')).toHaveText('Dark')
  })
})
