import { test, expect } from '@playwright/test'

test.describe('VisuallyHidden', () => {
  test('Default story loads without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-accessibility-visually-hidden--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('qui-visually-hidden')).toBeAttached()

    expect(errors).toEqual([])
  })

  test('hidden content is not visible but has an accessible name', async ({ page }) => {
    await page.goto('?path=/story/components-accessibility-visually-hidden--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const hidden = frame.getByTestId('qui-visually-hidden')

    await expect(hidden).not.toBeVisible()
    await expect(hidden).toHaveText('This text is visually hidden but accessible to screen readers.')
    await expect(frame.getByText('Visible Button')).toBeVisible()
  })
})
