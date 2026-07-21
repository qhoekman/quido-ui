import { test, expect } from '@playwright/test'

test.describe('Label', () => {
  test('Default story renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-entry-label--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('label')).toBeVisible()
    await expect(frame.getByTestId('label')).toHaveText('Label')

    expect(errors).toEqual([])
  })

  test('renders as a native label element', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-label--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('label')).toHaveJSProperty(
      'tagName',
      'LABEL'
    )
  })
})
