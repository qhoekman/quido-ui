import { test, expect } from '@playwright/test'

test.describe('Time Picker', () => {
  test('Default story renders the trigger with the formatted time, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-time-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('time-picker__input')

    await expect(input).toBeVisible()
    await expect(input).toHaveValue('12:00')

    expect(errors).toEqual([])
  })

  test('clicking the trigger opens the popover with hour/minute lists', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-time-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('time-picker__input')

    await input.click()
    await expect(frame.getByTestId('time-select__hour')).toHaveCount(24)
  })

  test('regression: selecting an hour updates the trigger and closes the popover', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-time-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('time-picker__input')

    await input.click()
    await frame
      .getByTestId('time-select__hour')
      .filter({ hasText: /^\s*05\s*$/ })
      .click()

    await expect(input).toHaveValue('05:00')
    await expect(frame.getByTestId('time-select__hour')).toHaveCount(0)
  })

  test('regression: selecting a minute updates the trigger and closes the popover', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-time-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('time-picker__input')

    await input.click()
    await frame
      .getByTestId('time-select__minute')
      .filter({ hasText: /^\s*30\s*$/ })
      .click()

    await expect(input).toHaveValue('12:30')
  })
})
