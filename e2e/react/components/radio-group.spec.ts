import { test, expect } from '@playwright/test'

test.describe('Radio Group', () => {
  test('Default story renders with the default value checked, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto(
      '?path=/story/components-data-manipulation-radio-group--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('radio-group')).toBeVisible()
    await expect(frame.getByTestId('radio-group__item-option-one')).toHaveAttribute(
      'data-state',
      'checked'
    )
    await expect(frame.getByTestId('radio-group__item-option-two')).toHaveAttribute(
      'data-state',
      'unchecked'
    )

    expect(errors).toEqual([])
  })

  test('switches selection on click', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-manipulation-radio-group--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('radio-group__item-option-two').click()

    await expect(frame.getByTestId('radio-group__item-option-two')).toHaveAttribute(
      'data-state',
      'checked'
    )
    await expect(frame.getByTestId('radio-group__item-option-one')).toHaveAttribute(
      'data-state',
      'unchecked'
    )
  })
})
