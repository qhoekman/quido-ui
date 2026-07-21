import { test, expect } from '@playwright/test'

test.describe('Clipboard', () => {
  test('Default story renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-actions-clipboard--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('button')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('is a real <button> element', async ({ page }) => {
    await page.goto('?path=/story/components-actions-clipboard--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByTestId('button')

    await expect(button).toHaveJSProperty('tagName', 'BUTTON')
  })

  test('clicking copies the configured text via cdkCopyToClipboard', async ({
    page,
    context
  }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    await page.goto('?path=/story/components-actions-clipboard--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByTestId('button')

    await button.click()

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText()
    )
    expect(clipboardText).toBe('Hello World')
  })
})
