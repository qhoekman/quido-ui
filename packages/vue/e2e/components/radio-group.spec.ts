import { test, expect } from '@playwright/test'

test.describe('Radio Group', () => {
  test('Default story renders two radio items with the default checked, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-entry-radio-group--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByRole('radio')

    await expect(items).toHaveCount(2)
    await expect(items.nth(0)).toHaveAttribute('data-state', 'checked')
    await expect(items.nth(1)).toHaveAttribute('data-state', 'unchecked')

    expect(errors).toEqual([])
  })

  test('regression: clicking an unchecked item selects it and unchecks the other', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-radio-group--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByRole('radio')

    await items.nth(1).click()

    await expect(items.nth(1)).toHaveAttribute('data-state', 'checked')
    await expect(items.nth(0)).toHaveAttribute('data-state', 'unchecked')
  })

  test('regression: an externally-set value prop controls the selection (modelValue wiring)', async ({
    page
  }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-data-entry-radio-group--default&args=value:option-two'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByRole('radio')

    await expect(items.nth(1)).toHaveAttribute('data-state', 'checked')
    await expect(items.nth(0)).toHaveAttribute('data-state', 'unchecked')
  })

  test('clicking the associated label also selects the radio item', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-radio-group--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByRole('radio')

    await frame.getByText('Option Two').click()

    await expect(items.nth(1)).toHaveAttribute('data-state', 'checked')
  })

  test('arrow keys move roving focus to the next item', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-radio-group--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByRole('radio')

    await items.nth(0).focus()
    await page.keyboard.press('ArrowDown')

    await expect(items.nth(1)).toBeFocused()
  })

  test('disabled prop prevents interaction', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-data-entry-radio-group--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByRole('radio')

    await expect(items.nth(0)).toBeDisabled()
    await expect(items.nth(1)).toBeDisabled()
  })
})
