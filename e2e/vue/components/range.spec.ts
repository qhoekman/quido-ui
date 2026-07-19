import { test, expect } from '@playwright/test'

test.describe('Range', () => {
  test('Default story renders both thumbs at their initial values, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-range--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const thumbs = frame.locator('.q-range-thumb')

    await expect(frame.locator('.q-range-track')).toBeVisible()
    await expect(thumbs).toHaveCount(2)
    await expect(thumbs.nth(0)).toHaveAttribute('aria-valuenow', '0')
    await expect(thumbs.nth(1)).toHaveAttribute('aria-valuenow', '100')

    expect(errors).toEqual([])
  })

  test('regression: both thumbs are independently keyboard-interactive (modelValue wiring)', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-range--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const thumbs = frame.locator('.q-range-thumb')

    await thumbs.nth(0).focus()
    await page.keyboard.press('ArrowRight')
    await expect(thumbs.nth(0)).toHaveAttribute('aria-valuenow', '10')

    await thumbs.nth(1).focus()
    await page.keyboard.press('ArrowLeft')
    await expect(thumbs.nth(1)).toHaveAttribute('aria-valuenow', '90')
    // the other thumb's value must be unaffected by moving this one
    await expect(thumbs.nth(0)).toHaveAttribute('aria-valuenow', '10')
  })

  test('disabled prop makes both thumbs non-interactive', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-range--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const thumbs = frame.locator('.q-range-thumb')

    await expect(thumbs.nth(0)).toHaveAttribute('data-disabled', '')
    await expect(thumbs.nth(1)).toHaveAttribute('data-disabled', '')
    await expect(thumbs.nth(0)).not.toHaveAttribute('tabindex')
    await expect(thumbs.nth(1)).not.toHaveAttribute('tabindex')
  })
})
