import { test, expect } from '@playwright/test'

test.describe('ListButton', () => {
  test('Default story renders 5 enabled list buttons', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-mobile-components-list-button--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('list-button')).toHaveCount(5)
    await expect(frame.getByTestId('list-button').first()).toBeEnabled()

    expect(errors).toEqual([])
  })

  test('disabled control applies native disabled state', async ({ page }) => {
    await page.goto(
      '?path=/story/features-mobile-components-list-button--default&args=disabled:!true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('list-button').first()).toBeDisabled()
  })
})
