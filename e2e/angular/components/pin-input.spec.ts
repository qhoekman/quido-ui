import { test, expect } from '@playwright/test'

test.describe('PinInput', () => {
  test('Default story renders 4 empty digit inputs, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-pin-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const digits = frame.getByTestId('pin-input__input')

    await expect(digits).toHaveCount(4)
    for (let i = 0; i < 4; i++) {
      await expect(digits.nth(i)).toHaveValue('')
    }

    expect(errors).toEqual([])
  })

  test('regression: typed digits persist and auto-advance focus to the next input', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-pin-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const digits = frame.getByTestId('pin-input__input')

    await digits.nth(0).pressSequentially('7')
    await expect(digits.nth(0)).toHaveValue('7')
    await expect(digits.nth(1)).toBeFocused()

    await digits.nth(1).pressSequentially('3')
    await expect(digits.nth(1)).toHaveValue('3')
    // earlier digit must survive the re-render triggered by this keystroke
    await expect(digits.nth(0)).toHaveValue('7')
    await expect(digits.nth(2)).toBeFocused()
  })

  test('backspace on an empty digit focuses the previous digit without clearing it', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-pin-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const digits = frame.getByTestId('pin-input__input')

    await digits.nth(0).pressSequentially('7')
    await digits.nth(1).press('Backspace')

    await expect(digits.nth(0)).toBeFocused()
    await expect(digits.nth(0)).toHaveValue('7')
  })

  test('filling all digits keeps every value intact', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-pin-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const digits = frame.getByTestId('pin-input__input')

    await digits.nth(0).pressSequentially('7')
    await digits.nth(1).pressSequentially('3')
    await digits.nth(2).pressSequentially('9')
    await digits.nth(3).pressSequentially('1')

    await expect(digits.nth(0)).toHaveValue('7')
    await expect(digits.nth(1)).toHaveValue('3')
    await expect(digits.nth(2)).toHaveValue('9')
    await expect(digits.nth(3)).toHaveValue('1')
  })
})
