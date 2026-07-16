import { test, expect } from '@playwright/test'

test.describe('Input', () => {
  test('Default story renders with placeholder and type=text, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-entry-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('.q-input')

    await expect(input).toBeVisible()
    await expect(input).toHaveAttribute('placeholder', 'Enter your name')
    await expect(input).toHaveAttribute('type', 'text')

    expect(errors).toEqual([])
  })

  test('regression: typing persists (v-model round-trip)', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('.q-input')

    await input.fill('Ada Lovelace')
    await expect(input).toHaveValue('Ada Lovelace')
  })

  test('regression: disabled/required/readOnly/maxLength/minLength props are applied to the DOM', async ({
    page
  }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-data-entry-input--default&args=disabled:true;required:true;readOnly:true;maxLength:5;minLength:2'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('.q-input')

    await expect(input).toBeDisabled()
    await expect(input).toHaveAttribute('required', '')
    await expect(input).toHaveAttribute('readonly', '')
    await expect(input).toHaveAttribute('maxlength', '5')
    await expect(input).toHaveAttribute('minlength', '2')
  })

  test('type prop switches the native input type', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-data-entry-input--default&args=type:email'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.locator('.q-input')).toHaveAttribute('type', 'email')
  })

  test('size prop applies the corresponding size class', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-input--default')
    const input = page.frameLocator('#storybook-preview-iframe').locator('.q-input')
    await expect(input).toHaveClass(/size--md/)

    const sizeSelect = page.locator('select').filter({ hasText: 'md' })
    await sizeSelect.selectOption('lg')

    await expect(input).toHaveClass(/size--lg/)
  })
})
