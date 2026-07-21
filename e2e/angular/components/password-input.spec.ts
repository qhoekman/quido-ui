import { test, expect } from '@playwright/test'

test.describe('PasswordInput', () => {
  test('Default story renders a password field, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      '?path=/story/components-data-entry-password-input--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('password-input')

    await expect(input).toBeVisible()
    await expect(input).toHaveAttribute('type', 'password')
    await expect(input).toHaveAttribute('placeholder', 'Enter password')

    expect(errors).toEqual([])
  })

  test('regression: typing persists across a visibility toggle', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-password-input--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('password-input')

    await input.fill('secret123')
    await expect(input).toHaveValue('secret123')

    await frame.getByTestId('password-input__button').click()
    await expect(input).toHaveAttribute('type', 'text')
    await expect(input).toHaveValue('secret123')
  })

  test('toggling visibility switches the input type between password and text', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-password-input--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('password-input')
    const toggle = frame.getByTestId('password-input__button')

    await expect(input).toHaveAttribute('type', 'password')
    await toggle.click()
    await expect(input).toHaveAttribute('type', 'text')
    await toggle.click()
    await expect(input).toHaveAttribute('type', 'password')
  })

  test('disabled prop disables the input', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-password-input--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('password-input')).toBeDisabled()
  })
})
