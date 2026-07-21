import { test, expect } from '@playwright/test'

test.describe('Input', () => {
  test('Default story renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-entry-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('input')).toBeVisible()
    await expect(frame.getByTestId('input')).toHaveAttribute(
      'placeholder',
      'Enter text...'
    )

    expect(errors).toEqual([])
  })

  test('accepts typed input', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('input')

    await input.fill('Hello World')
    await expect(input).toHaveValue('Hello World')
  })

  test('disabled state applies native disabled attribute', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-input--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('input')).toBeDisabled()
  })
})
