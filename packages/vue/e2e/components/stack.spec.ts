import { test, expect } from '@playwright/test'

test.describe('Stack', () => {
  test('Default story renders 5 children in a row with gap, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-layout-stack--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const stack = frame.locator('.q-stack')
    await expect(stack).toBeVisible()
    await expect(stack).toHaveJSProperty('tagName', 'DIV')
    await expect(stack).toHaveCSS('display', 'flex')
    await expect(stack).toHaveCSS('flex-direction', 'row')
    await expect(stack).toHaveCSS('gap', '16px')
    await expect(stack.locator('> *')).toHaveCount(5)

    expect(errors).toEqual([])
  })

  test('regression: as="span" still renders display:flex (scoped CSS must not rely on a bare div tag selector)', async ({
    page
  }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-layout-stack--default&args=as:span'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const stack = frame.locator('.q-stack')

    await expect(stack).toHaveJSProperty('tagName', 'SPAN')
    await expect(stack).toHaveCSS('display', 'flex')
    await expect(stack).toHaveCSS('gap', '16px')
  })

  test('direction=column switches flex-direction', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-layout-stack--default')
    await page.getByRole('tab', { name: 'Controls' }).click()
    await page.locator('#control-direction').selectOption('column')

    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.locator('.q-stack')).toHaveCSS('flex-direction', 'column')
  })

  test('items and align variants apply the correct justify-content/align-items', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-layout-stack--default')
    await page.getByRole('tab', { name: 'Controls' }).click()
    await page.locator('#control-items').selectOption('center')
    await page.locator('#control-align').selectOption('stretch')

    const frame = page.frameLocator('#storybook-preview-iframe')
    const stack = frame.locator('.q-stack')
    await expect(stack).toHaveCSS('justify-content', 'center')
    await expect(stack).toHaveCSS('align-items', 'stretch')
  })
})
