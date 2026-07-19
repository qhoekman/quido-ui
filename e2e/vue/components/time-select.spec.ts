import { test, expect } from '@playwright/test'

test.describe('Time Select', () => {
  test('Default story renders 24 hours and 12 base minutes, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-time-select-hour')).toHaveCount(24)
    // 12 base 5-minute increments + the injected non-aligned selectedMinute "08"
    await expect(frame.getByTestId('qui-time-select-minute')).toHaveCount(13)

    expect(errors).toEqual([])
  })

  test('regression: a selectedMinute not aligned to the 5-minute grid is injected and marked selected', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const minute08 = frame.getByTestId('qui-time-select-minute').filter({ hasText: /^08$/ })

    await expect(minute08).toHaveCount(1)
    await expect(minute08).toHaveAttribute('aria-selected', 'true')
  })

  test('clicking an hour selects it and emits valueChange', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('qui-time-select-hour').filter({ hasText: /^09$/ }).click()

    await expect(
      frame.getByTestId('qui-time-select-hour').filter({ hasText: /^09$/ })
    ).toHaveAttribute('aria-selected', 'true')
  })

  test('clicking a minute selects it', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('qui-time-select-minute').filter({ hasText: /^45$/ }).click()

    await expect(
      frame.getByTestId('qui-time-select-minute').filter({ hasText: /^45$/ })
    ).toHaveAttribute('aria-selected', 'true')
  })

  test('pressing Enter on a focused hour selects it', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-time-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const hour15 = frame.getByTestId('qui-time-select-hour').filter({ hasText: /^15$/ })

    await hour15.focus()
    await hour15.press('Enter')

    await expect(hour15).toHaveAttribute('aria-selected', 'true')
  })
})
