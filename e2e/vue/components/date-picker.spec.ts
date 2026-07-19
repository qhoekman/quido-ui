import { test, expect } from '@playwright/test'

test.describe('Date Picker', () => {
  test('Default story renders the trigger with the formatted selected date, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-date-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-date-picker-trigger')

    await expect(trigger).toBeVisible()
    await expect(trigger).toHaveAttribute('data-state', 'closed')

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens the popover calendar without crashing', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-date-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-date-picker-trigger')

    await trigger.click()
    await expect(trigger).toHaveAttribute('data-state', 'open')
    await expect(frame.getByRole('application', { name: 'Calendar' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('selecting a day in the calendar closes the popover and updates the trigger date', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-date-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-date-picker-trigger')
    const input = frame.getByTestId('qui-date-picker-input')

    await trigger.click()
    await frame
      .getByTestId('qui-calendar-day')
      .filter({ hasText: /^20$/ })
      .first()
      .click()

    await expect(trigger).toHaveAttribute('data-state', 'closed')
    await expect(input).toHaveValue(/20, 2026/)
  })

  test('regression: disabled date picker cannot be opened', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-date-picker--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-date-picker-trigger')
    const input = frame.getByTestId('qui-date-picker-input')

    await expect(input).toBeDisabled()
    await trigger.click({ force: true })
    await expect(trigger).toHaveAttribute('data-state', 'closed')
  })
})
