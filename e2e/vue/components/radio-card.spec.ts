import { test, expect } from '@playwright/test'

test.describe('Radio Card', () => {
  test('Default story renders 5 items with the default value checked and xs disabled, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-ecommerce-components-radio-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByRole('radio')

    await expect(items).toHaveCount(5)
    await expect(frame.getByRole('radio', { name: /SM/ })).toHaveAttribute('data-state', 'checked')
    await expect(frame.getByRole('radio', { name: /XS/ })).toBeDisabled()

    expect(errors).toEqual([])
  })

  test('regression: clicking an item selects it and unchecks the previous one', async ({
    page
  }) => {
    await page.goto('?path=/story/features-ecommerce-components-radio-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('radio', { name: /LG/ }).click()

    await expect(frame.getByRole('radio', { name: /LG/ })).toHaveAttribute('data-state', 'checked')
    await expect(frame.getByRole('radio', { name: /SM/ })).toHaveAttribute('data-state', 'unchecked')
  })

  test('regression: an externally-set value prop controls the selection (modelValue wiring)', async ({
    page
  }) => {
    await page.goto('?path=/story/features-ecommerce-components-radio-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const valueRow = page.locator('tr').filter({ hasText: /^value/ })
    await valueRow.getByRole('button', { name: 'Set string' }).click()
    await page.locator('#control-value').fill('lg')

    await expect(frame.getByRole('radio', { name: /LG/ })).toHaveAttribute('data-state', 'checked')
    await expect(frame.getByRole('radio', { name: /SM/ })).toHaveAttribute('data-state', 'unchecked')
  })

  test('disabled prop prevents interaction with all items', async ({ page }) => {
    await page.goto(
      '?path=/story/features-ecommerce-components-radio-card--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByRole('radio', { name: /SM/ })).toBeDisabled()
  })

  test('Large story renders items with descriptions, and clicking the enabled item selects it', async ({
    page
  }) => {
    await page.goto('?path=/story/features-ecommerce-components-radio-card--large')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByText('Get it in 3-5 business days')).toHaveCount(2)
    await expect(frame.getByRole('radio', { name: /STANDARD/ })).toBeDisabled()

    await frame.getByRole('radio', { name: /NEXT DAY/ }).click()
    await expect(frame.getByRole('radio', { name: /NEXT DAY/ })).toHaveAttribute(
      'data-state',
      'checked'
    )
  })
})
