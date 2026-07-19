import { test, expect } from '@playwright/test'

test.describe('Textarea', () => {
  test('Default story renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-manipulation-textarea--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('textarea')).toBeVisible()
    await expect(frame.getByTestId('textarea')).toHaveValue(/Lorem ipsum/)

    expect(errors).toEqual([])
  })

  test('accepts typed input', async ({ page }) => {
    await page.goto('?path=/story/components-data-manipulation-textarea--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const textarea = frame.getByTestId('textarea')

    await textarea.fill('Hello World')
    await expect(textarea).toHaveValue('Hello World')
  })

  test('disabled state applies native disabled attribute', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-manipulation-textarea--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('textarea')).toBeDisabled()
  })
})
