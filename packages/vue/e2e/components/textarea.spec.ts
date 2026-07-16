import { test, expect } from '@playwright/test'

test.describe('Textarea', () => {
  test('Default story renders with the pre-filled value, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-entry-textarea--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const textarea = frame.locator('.q-textarea')

    await expect(textarea).toBeVisible()
    await expect(textarea).toHaveValue(/Lorem ipsum/)

    expect(errors).toEqual([])
  })

  test('regression: typing persists (v-model round-trip)', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-textarea--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const textarea = frame.locator('.q-textarea')

    await textarea.fill('hello world')
    await expect(textarea).toHaveValue('hello world')
  })

  test('regression: disabled/required/readOnly/rows/cols/maxLength/minLength props reach the DOM', async ({
    page
  }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-data-entry-textarea--default&args=disabled:true;required:true;readOnly:true;rows:8;cols:40;maxLength:20;minLength:2'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const textarea = frame.locator('.q-textarea')

    await expect(textarea).toBeDisabled()
    await expect(textarea).toHaveAttribute('required', '')
    await expect(textarea).toHaveAttribute('readonly', '')
    await expect(textarea).toHaveAttribute('rows', '8')
    await expect(textarea).toHaveAttribute('cols', '40')
    await expect(textarea).toHaveAttribute('maxlength', '20')
    await expect(textarea).toHaveAttribute('minlength', '2')
  })

  test('placeholder prop reaches the DOM', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-textarea--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.locator('.q-textarea')).toHaveAttribute('placeholder', 'Enter your message')
  })

  test('size prop applies the corresponding size class', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-textarea--default')
    const textarea = page.frameLocator('#storybook-preview-iframe').locator('.q-textarea')
    await expect(textarea).toHaveClass(/size--md/)

    const sizeSelect = page.locator('select').filter({ hasText: 'md' })
    await sizeSelect.selectOption('lg')

    await expect(textarea).toHaveClass(/size--lg/)
  })
})
