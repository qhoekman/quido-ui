import { test, expect } from '@playwright/test'

test.describe('Countdown', () => {
  test('Default story renders hh:mm:ss items and ticks down without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-countdown--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('countdown__item')

    await expect(items).toHaveCount(3)
    const secondsItem = items.nth(2)
    const first = (await secondsItem.textContent())?.trim()
    expect(first).toMatch(/^\d{1,2}$/)

    await expect
      .poll(async () => (await secondsItem.textContent())?.trim(), {
        timeout: 3000
      })
      .not.toBe(first)

    expect(errors).toEqual([])
  })
})
