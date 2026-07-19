import { test, expect } from '@playwright/test'

test.describe('Separator', () => {
  test('Default story renders a horizontal, decorative (no role) separator, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-separator--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const separator = frame.locator('.q-separator')

    await expect(separator).toBeVisible()
    await expect(separator).toHaveJSProperty('tagName', 'DIV')
    await expect(separator).toHaveAttribute('data-orientation', 'horizontal')
    await expect(separator).not.toHaveAttribute('role', /.+/)
    await expect(separator).toHaveCSS('height', '1px')

    expect(errors).toEqual([])
  })

  test('regression: as="span" still renders visible, correctly-sized separator (scoped CSS must not rely on a bare div tag selector)', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-layout-separator--default&args=as:span'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const separator = frame.locator('.q-separator')

    await expect(separator).toHaveJSProperty('tagName', 'SPAN')
    await expect(separator).toHaveCSS('display', 'block')
    await expect(separator).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  })

  test('fresh mount with decorative=false renders role="separator" and aria-orientation', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-layout-separator--default&args=decorative:false'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const separator = frame.locator('.q-separator')

    await expect(separator).toHaveAttribute('role', 'separator')
    await expect(separator).toHaveAttribute('aria-orientation', 'horizontal')
  })

  test('vertical orientation applies correct sizing', async ({ page }) => {
    await page.goto('?path=/story/components-layout-separator--default')
    await page.getByRole('tab', { name: 'Controls' }).click()
    await page.locator('#control-orientation').selectOption('vertical')

    const frame = page.frameLocator('#storybook-preview-iframe')
    const separator = frame.locator('.q-separator')

    await expect(separator).toHaveCSS('width', '1px')
    await expect(separator).toHaveAttribute('data-orientation', 'vertical')
  })
})
