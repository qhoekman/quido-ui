import { test, expect } from '@playwright/test'

test.describe('ListButton', () => {
  test('Default story renders five full-width buttons without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-mobile-components-list-button--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const buttons = frame.getByRole('button')

    await expect(buttons).toHaveCount(5)
    await expect(buttons.first()).toHaveJSProperty('tagName', 'BUTTON')
    await expect(frame.getByText('Button 1')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('disabled state applies aria-disabled and native disabled', async ({ page }) => {
    await page.goto(
      '?path=/story/features-mobile-components-list-button--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByRole('button').first()

    await expect(button).toBeDisabled()
    await expect(button).toHaveAttribute('aria-disabled', 'true')
  })
})
