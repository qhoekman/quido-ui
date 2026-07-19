import { test, expect } from '@playwright/test'

test.describe('Filters', () => {
  test('Default story renders category checkboxes, price range, and brand radios', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-ecommerce-components-filters--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('filters__form').first()).toBeVisible()
    await expect(
      frame.getByTestId('filters__checkbox-category.shoes')
    ).toBeVisible()
    await expect(frame.getByTestId('filters__range-price')).toContainText(
      '€ 0'
    )
    await expect(
      frame.getByTestId('filters__radio-group-item-nike')
    ).toBeVisible()
    await expect(frame.getByTestId('filters__clear-button')).not.toBeVisible()

    expect(errors).toEqual([])
  })

  test('checking a filter reveals the clear button, which resets filters', async ({
    page
  }) => {
    await page.goto('?path=/story/features-ecommerce-components-filters--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const shoesCheckbox = frame
      .getByTestId('filters__checkbox-category.shoes')
      .getByRole('checkbox')

    await shoesCheckbox.click()
    await expect(shoesCheckbox).toHaveAttribute('data-state', 'checked')
    await expect(frame.getByTestId('filters__clear-button')).toBeVisible()

    await frame.getByTestId('filters__clear-button').click()
    await expect(shoesCheckbox).toHaveAttribute('data-state', 'unchecked')
    await expect(frame.getByTestId('filters__clear-button')).not.toBeVisible()
  })
})
