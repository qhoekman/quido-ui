import { test, expect } from '@playwright/test'

test.describe('Button', () => {
  test('Default story loads without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-actions-button--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByRole('button', { name: 'Button' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('defaults to a real, focusable <button> element even without an explicit "as" prop', async ({
    page
  }) => {
    await page.goto(
      'iframe.html?id=components-accessibility-visually-hidden--default&viewMode=story'
    )
    const button = page.getByRole('button', { name: 'Visible Button' })

    await expect(button).toBeVisible()
    await expect(button).toHaveJSProperty('tagName', 'BUTTON')
    await button.focus()
    await expect(button).toBeFocused()
  })

  test('disabled state applies aria-disabled and native disabled', async ({ page }) => {
    await page.goto(
      '?path=/story/components-actions-button--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByRole('button', { name: 'Button' })

    await expect(button).toBeDisabled()
    await expect(button).toHaveAttribute('aria-disabled', 'true')
  })
})
