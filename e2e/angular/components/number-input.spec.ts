import { test, expect } from '@playwright/test'

test.describe('NumberInput', () => {
  test('Default story renders empty with a placeholder, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-number-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('number-input')

    await expect(input).toBeVisible()
    await expect(input).toHaveAttribute('placeholder', '0')
    await expect(input).toHaveValue('')

    expect(errors).toEqual([])
  })

  test('regression: clicking increment/decrement updates the displayed value', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-number-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('number-input')

    await frame.getByRole('button', { name: 'Increment' }).click()
    await frame.getByRole('button', { name: 'Increment' }).click()
    await expect(input).toHaveValue('2')

    await frame.getByRole('button', { name: 'Decrement' }).click()
    await expect(input).toHaveValue('1')
  })

  test('typing a value persists across a subsequent increment', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-number-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('number-input')

    await input.fill('42')
    await expect(input).toHaveValue('42')
    await frame.getByRole('button', { name: 'Increment' }).click()
    await expect(input).toHaveValue('43')
  })

  test("typing 'e' is blocked to prevent scientific notation", async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-number-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('number-input')

    await input.fill('1')
    await input.press('e')
    await expect(input).toHaveValue('1')
  })

  test('disabled prop disables the input', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-number-input--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('number-input')).toBeDisabled()
  })
})
