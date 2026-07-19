import { test, expect } from '@playwright/test'

test.describe('Button', () => {
  test('Default story renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-actions-button--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('button')).toBeVisible()
    await expect(frame.getByTestId('button')).toHaveText('Click me')

    expect(errors).toEqual([])
  })

  test('is a real, focusable <button> element', async ({ page }) => {
    await page.goto('?path=/story/components-actions-button--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByTestId('button')

    await expect(button).toHaveJSProperty('tagName', 'BUTTON')
    await button.focus()
    await expect(button).toBeFocused()
  })

  test('disabled state applies native disabled attribute', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-actions-button--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByTestId('button')

    await expect(button).toBeDisabled()
  })
})
