import { test, expect } from '@playwright/test'

test.describe('DatePicker', () => {
  test('Default story renders the input with the formatted selected date, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-date-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('date-picker__input')

    await expect(input).toBeVisible()
    await expect(input).toHaveValue(/\w+ \d{1,2}, \d{4}/)

    expect(errors).toEqual([])
  })

  test('regression: clicking the input opens the popover calendar without crashing', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-date-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('date-picker__input')

    await input.click()
    await expect(
      frame.getByRole('application', { name: 'Calendar' })
    ).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: selecting a day in the calendar closes the popover and updates the input', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-date-picker--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('date-picker__input')

    const initialValue = await input.inputValue()
    await input.click()

    const days = frame.getByTestId('calendar__day')
    const target = days.filter({ hasText: /^\s*16\s*$/ }).first()
    await target.click()

    await expect(frame.getByTestId('calendar')).toHaveCount(0)
    await expect(input).not.toHaveValue(initialValue)
  })
})
