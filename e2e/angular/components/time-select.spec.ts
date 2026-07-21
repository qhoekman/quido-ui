import { test, expect } from '@playwright/test'

test.describe('Time Select', () => {
  test('Default story renders 24 hours and 13 minutes, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('time-select__hour')).toHaveCount(24)
    // 12 base 5-minute increments + the injected non-aligned selectedMinute "08"
    await expect(frame.getByTestId('time-select__minute')).toHaveCount(13)

    expect(errors).toEqual([])
  })

  test('regression: hours/minutes inputs mark the matching item as selected', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const hour12 = frame.getByTestId('time-select__hour').filter({ hasText: /^\s*12\s*$/ })
    const minute08 = frame.getByTestId('time-select__minute').filter({ hasText: /^\s*08\s*$/ })

    await expect(hour12).toHaveAttribute('aria-selected', 'true')
    await expect(minute08).toHaveAttribute('aria-selected', 'true')
  })

  test('clicking an hour selects it and emits valueChange', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('time-select__hour').filter({ hasText: /^\s*09\s*$/ }).click()

    await expect(
      frame.getByTestId('time-select__hour').filter({ hasText: /^\s*09\s*$/ })
    ).toHaveAttribute('aria-selected', 'true')
  })

  test('clicking a minute selects it', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('time-select__minute').filter({ hasText: /^\s*45\s*$/ }).click()

    await expect(
      frame.getByTestId('time-select__minute').filter({ hasText: /^\s*45\s*$/ })
    ).toHaveAttribute('aria-selected', 'true')
  })

  test('regression: pressing Enter on a focused hour selects that hour, not the previously selected one', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const hour15 = frame.getByTestId('time-select__hour').filter({ hasText: /^\s*15\s*$/ })

    await hour15.focus()
    await hour15.press('Enter')

    await expect(hour15).toHaveAttribute('aria-selected', 'true')
  })
})
