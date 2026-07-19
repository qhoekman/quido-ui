import { test, expect } from '@playwright/test'

test.describe('SkipToContent', () => {
  test('Default story loads without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-accessibility-skip-to-content--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('qui-skip-to-content')).toBeAttached()

    expect(errors).toEqual([])
  })

  test('Focus reveals the skip link and Enter navigates to the target', async ({ page }) => {
    await page.goto('?path=/story/components-accessibility-skip-to-content--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const link = frame.getByTestId('qui-skip-to-content')
    const main = frame.locator('#main-content')

    await link.focus()
    await expect(link).toHaveClass(/variant--visible/)

    await link.press('Enter')
    await expect(main).toBeFocused()
  })
})
