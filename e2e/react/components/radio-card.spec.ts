import { test, expect } from '@playwright/test'

test.describe('RadioCard', () => {
  test('Default story renders 5 size cards, SM checked, XS disabled', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-ecommerce-components-radio-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('radio-card')).toBeVisible()
    await expect(frame.getByTestId('radio-card__item-sm')).toHaveAttribute(
      'data-state',
      'checked'
    )
    await expect(frame.getByTestId('radio-card__item-xs')).toBeDisabled()

    expect(errors).toEqual([])
  })

  test('clicking a card selects it', async ({ page }) => {
    await page.goto('?path=/story/features-ecommerce-components-radio-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('radio-card__item-md').click()
    await expect(frame.getByTestId('radio-card__item-md')).toHaveAttribute(
      'data-state',
      'checked'
    )
    await expect(frame.getByTestId('radio-card__item-sm')).toHaveAttribute(
      'data-state',
      'unchecked'
    )
  })

  test('Large story renders delivery methods with description, Standard disabled', async ({
    page
  }) => {
    await page.goto('?path=/story/features-ecommerce-components-radio-card--large')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(
      frame.getByTestId('radio-card__item-Standard')
    ).toBeDisabled()
    await expect(
      frame.getByTestId('radio-card__item-Next Day')
    ).toContainText('Get it in 3-5 business days')
  })
})
