import { test, expect } from '@playwright/test'

test.describe('Clipboard', () => {
  test('Default story loads without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-actions-clipboard--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByRole('button', { name: 'Copy to clipboard' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('defaults to a real <button> element even without an explicit "as" prop', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-actions-clipboard--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByRole('button', { name: 'Copy to clipboard' })

    await expect(button).toHaveJSProperty('tagName', 'BUTTON')
  })

  test('clicking copies the text and shows a temporary "Copied!" state', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    await page.goto('http://localhost:6006/?path=/story/components-actions-clipboard--with-text')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByRole('button', { name: 'Copy to clipboard' })

    await button.click()
    await expect(frame.getByRole('button', { name: 'Copied!' })).toBeVisible()

    const clipboardText = await page.evaluate(() => navigator.clipboard.readText())
    expect(clipboardText).toBe('Copy this text to clipboard')

    await expect(frame.getByRole('button', { name: 'Copy to clipboard' })).toBeVisible({ timeout: 3000 })
  })

  test('disabled clipboard button cannot be clicked', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-actions-clipboard--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByRole('button', { name: 'Copy to clipboard' })

    await expect(button).toBeDisabled()
  })
})
