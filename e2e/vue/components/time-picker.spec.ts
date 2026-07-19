import { test, expect } from '@playwright/test'

test.describe('Time Picker', () => {
  test('Default story renders the trigger with the formatted time, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-time-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-time-picker-trigger')
    const input = frame.getByTestId('qui-time-picker-input')

    await expect(trigger).toBeVisible()
    await expect(trigger).toHaveAttribute('data-state', 'closed')
    await expect(input).toHaveValue('12:00')

    expect(errors).toEqual([])
  })

  test('clicking the trigger opens the popover with hour/minute lists', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-time-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-time-picker-trigger')

    await trigger.click()
    await expect(trigger).toHaveAttribute('data-state', 'open')
    await expect(frame.getByTestId('qui-time-select-hour')).toHaveCount(24)
  })

  test('selecting an hour updates the trigger and closes the popover', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-time-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-time-picker-trigger')
    const input = frame.getByTestId('qui-time-picker-input')

    await trigger.click()
    await frame.getByTestId('qui-time-select-hour').filter({ hasText: /^05$/ }).click()

    await expect(trigger).toHaveAttribute('data-state', 'closed')
    await expect(input).toHaveValue('05:00')
  })

  test('selecting a minute updates the trigger and closes the popover', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-time-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-time-picker-trigger')
    const input = frame.getByTestId('qui-time-picker-input')

    await trigger.click()
    await frame.getByTestId('qui-time-select-minute').filter({ hasText: /^30$/ }).click()

    await expect(trigger).toHaveAttribute('data-state', 'closed')
    await expect(input).toHaveValue('12:30')
  })

  test('regression: disabled time picker cannot be opened', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-time-picker--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-time-picker-trigger')
    const input = frame.getByTestId('qui-time-picker-input')

    await expect(input).toBeDisabled()
    await trigger.click({ force: true })
    await expect(trigger).toHaveAttribute('data-state', 'closed')
  })
})
