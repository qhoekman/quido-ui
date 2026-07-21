import { test, expect } from '@playwright/test'

test.describe('Textarea', () => {
  test('Default story renders, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-textarea--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const textarea = frame.getByTestId('textarea')

    await expect(textarea).toBeVisible()
    await expect(textarea).toHaveAttribute('placeholder', 'Enter text...')
    await expect(textarea).toHaveClass(/size--md/)

    expect(errors).toEqual([])
  })

  test('regression: typing persists in the textarea', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-textarea--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const textarea = frame.getByTestId('textarea')

    await textarea.fill('hello world')
    await expect(textarea).toHaveValue('hello world')
  })

  test('disabled arg disables the textarea', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-textarea--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('textarea')).toBeDisabled()
  })

  test('size arg applies the corresponding size class', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-textarea--default&args=size:lg'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('textarea')).toHaveClass(/size--lg/)
  })
})
