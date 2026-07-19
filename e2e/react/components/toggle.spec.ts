import { test, expect } from '@playwright/test'

test.describe('Toggle', () => {
  test('Default story renders off without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-manipulation-toggle--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('toggle')).toBeVisible()
    await expect(frame.getByTestId('toggle')).toHaveAttribute(
      'data-state',
      'off'
    )

    expect(errors).toEqual([])
  })

  test('toggles pressed state on click', async ({ page }) => {
    await page.goto('?path=/story/components-data-manipulation-toggle--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const toggle = frame.getByTestId('toggle')

    await toggle.click()
    await expect(toggle).toHaveAttribute('data-state', 'on')

    await toggle.click()
    await expect(toggle).toHaveAttribute('data-state', 'off')
  })

  test('disabled state applies native disabled attribute', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-manipulation-toggle--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('toggle')).toBeDisabled()
  })
})
