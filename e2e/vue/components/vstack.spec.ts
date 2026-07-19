import { test, expect } from '@playwright/test'

test.describe('VStack', () => {
  test('Default story renders 5 children in a column with gap, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-vstack--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const vstack = frame.locator('.q-vstack')
    await expect(vstack).toBeVisible()
    await expect(vstack).toHaveJSProperty('tagName', 'DIV')
    await expect(vstack).toHaveCSS('display', 'flex')
    await expect(vstack).toHaveCSS('flex-direction', 'column')
    await expect(vstack).toHaveCSS('gap', '16px')
    await expect(vstack.locator('> *')).toHaveCount(5)

    expect(errors).toEqual([])
  })

  test('regression: as="span" still renders display:flex/flex-direction:column (scoped CSS must not rely on a bare div tag selector)', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-layout-vstack--default&args=as:span'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const vstack = frame.locator('.q-vstack')

    await expect(vstack).toHaveJSProperty('tagName', 'SPAN')
    await expect(vstack).toHaveCSS('display', 'flex')
    await expect(vstack).toHaveCSS('flex-direction', 'column')
    await expect(vstack).toHaveCSS('gap', '16px')
  })

  test('gap variant classes apply the correct spacing', async ({ page }) => {
    await page.goto('?path=/story/components-layout-vstack--default')
    await page.getByRole('tab', { name: 'Controls' }).click()
    await page.locator('#control-gap').selectOption('none')

    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.locator('.q-vstack')).toHaveCSS('gap', '0px')
  })
})
