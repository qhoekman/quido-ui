import { test, expect } from '@playwright/test'

test.describe('Checkbox', () => {
  test('Default story renders unchecked without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-manipulation-checkbox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('checkbox')).toBeVisible()
    await expect(frame.getByTestId('checkbox')).toHaveAttribute(
      'data-state',
      'unchecked'
    )

    expect(errors).toEqual([])
  })

  test('toggles checked state on click and via keyboard', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-manipulation-checkbox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const checkbox = frame.getByTestId('checkbox')

    await checkbox.click()
    await expect(checkbox).toHaveAttribute('data-state', 'checked')

    await checkbox.focus();
    await page.keyboard.press('Space')
    await expect(checkbox).toHaveAttribute('data-state', 'unchecked')
  })

  test('disabled state applies aria-disabled', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-manipulation-checkbox--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const checkbox = frame.getByTestId('checkbox')

    await expect(checkbox).toHaveAttribute('data-disabled')
  })
})
