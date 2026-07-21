import { test, expect } from '@playwright/test'

test.describe('Separator', () => {
  test('Default story renders a horizontal 1px separator, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-separator--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const separator = frame.getByTestId('separator')

    await expect(separator).toBeVisible()
    await expect(separator).toHaveJSProperty('tagName', 'HR')
    await expect(separator).toHaveClass(/variant--horizontal/)
    await expect(separator).toHaveCSS('height', '1px')

    expect(errors).toEqual([])
  })

  test('regression: native <hr> browser-default border/margin does not mask the themed background', async ({
    page
  }) => {
    await page.goto('?path=/story/components-layout-separator--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const separator = frame.getByTestId('separator')

    await expect(separator).toHaveCSS('border-style', 'none')
    await expect(separator).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  })

  test('orientation arg applies vertical sizing', async ({ page }) => {
    await page.goto(
      '?path=/story/components-layout-separator--default&args=orientation:vertical'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const separator = frame.getByTestId('separator')

    await expect(separator).toHaveClass(/variant--vertical/)
    await expect(separator).toHaveCSS('width', '1px')
  })
})
