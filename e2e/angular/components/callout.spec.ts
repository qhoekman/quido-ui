import { test, expect } from '@playwright/test'

test.describe('Callout', () => {
  test('Default story renders as an alert with title, indicator, and description, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-feedback-callout--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const callout = frame.getByTestId('callout')

    await expect(callout).toBeVisible()
    await expect(callout).toHaveAttribute('role', 'alert')
    await expect(callout).toHaveClass(/variant--default/)
    await expect(frame.getByTestId('callout__indicator')).toBeVisible()
    await expect(frame.getByTestId('callout__title')).toHaveText('Callout Title')
    await expect(frame.getByTestId('callout__description')).toContainText(
      'This is a description inside the callout component.'
    )

    expect(errors).toEqual([])
  })

  test('variant arg applies the destructive variant class', async ({ page }) => {
    await page.goto(
      '?path=/story/components-feedback-callout--default&args=variant:destructive'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('callout')).toHaveClass(/variant--destructive/)
  })

  test('title renders as an h5 heading by default', async ({ page }) => {
    await page.goto('?path=/story/components-feedback-callout--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('callout__title')).toHaveJSProperty('tagName', 'H5')
  })
})
