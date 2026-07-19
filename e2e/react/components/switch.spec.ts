import { test, expect } from '@playwright/test'

test.describe('Switch', () => {
  test('Default story renders unchecked without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-manipulation-switch--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('switch')).toBeVisible()
    await expect(frame.getByTestId('switch')).toHaveAttribute(
      'data-state',
      'unchecked'
    )

    expect(errors).toEqual([])
  })

  test('toggles checked state on click and via keyboard', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-manipulation-switch--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const toggle = frame.getByTestId('switch')

    await toggle.click()
    await expect(toggle).toHaveAttribute('data-state', 'checked')

    await toggle.focus()
    await page.keyboard.press('Space')
    await expect(toggle).toHaveAttribute('data-state', 'unchecked')
  })

  test('disabled state applies aria-disabled', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-manipulation-switch--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('switch')).toHaveAttribute('data-disabled')
  })
})
