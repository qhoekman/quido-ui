import { test, expect } from '@playwright/test'

test.describe('Calendar', () => {
  test('Default story renders a month grid without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-calendar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('calendar')).toBeVisible()
    await expect(frame.getByTestId('calendar__weekdays')).toBeVisible()

    const dayCount = await frame.getByTestId('calendar__day').count()
    expect(dayCount % 7).toBe(0)
    expect(dayCount).toBeGreaterThanOrEqual(28)

    expect(errors).toEqual([])
  })

  test('next/prev month buttons navigate and update the header', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-calendar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const header = frame.getByTestId('calendar__header-month')

    const initialMonth = await header.textContent()
    await frame.getByTestId('calendar__header-next').click()
    await expect(header).not.toHaveText(initialMonth ?? '')

    await frame.getByTestId('calendar__header-prev').click()
    await expect(header).toHaveText(initialMonth ?? '')
  })

  test('clicking a day selects it', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-calendar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const days = frame.getByTestId('calendar__day')

    const target = days.filter({ hasText: /^\s*1\s*$/ }).first()
    await target.click()
    await expect(target).toHaveAttribute('aria-selected', 'true')
  })
})
