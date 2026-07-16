import { test, expect } from '@playwright/test'

test.describe('Callout', () => {
  test('Default story renders as an alert with title, indicator, and description, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-feedback-callout--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const callout = frame.getByTestId('qui-callout')

    await expect(callout).toBeVisible()
    await expect(callout).toHaveAttribute('role', 'alert')
    await expect(callout).toHaveClass(/variant--default/)
    await expect(frame.getByTestId('qui-callout-indicator')).toBeVisible()
    await expect(frame.getByTestId('qui-callout-title')).toHaveText('Callout Title')
    await expect(frame.getByTestId('qui-callout-description')).toContainText(
      'This is a description inside the callout component.'
    )

    expect(errors).toEqual([])
  })

  test('Destructive story applies the destructive variant class', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-feedback-callout--destructive')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('qui-callout')).toHaveClass(/variant--destructive/)
  })

  test('title renders as an h5 heading by default', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-feedback-callout--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('qui-callout-title')).toHaveJSProperty('tagName', 'H5')
  })
})
