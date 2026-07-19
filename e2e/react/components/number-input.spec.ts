import { test, expect } from '@playwright/test'

test.describe('NumberInput', () => {
  test('Default story renders with value 1', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto(
      '?path=/story/features-ecommerce-components-number-input--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('number-input')).toBeVisible()
    await expect(frame.getByTestId('number-input__field')).toHaveValue('1')

    expect(errors).toEqual([])
  })

  test('increment and decrement buttons update the value', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/features-ecommerce-components-number-input--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('number-input__increment').click()
    await expect(frame.getByTestId('number-input__field')).toHaveValue('2')

    await frame.getByTestId('number-input__decrement').click()
    await frame.getByTestId('number-input__decrement').click()
    await expect(frame.getByTestId('number-input__field')).toHaveValue('0')
  })
})
