import { test, expect } from '@playwright/test'

test.describe('HStack', () => {
  test('Default story renders 5 children in a flex row with gap, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-hstack--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const hstack = frame.locator('.q-hstack')
    await expect(hstack).toBeVisible()
    await expect(hstack).toHaveJSProperty('tagName', 'DIV')
    await expect(hstack).toHaveCSS('display', 'flex')
    await expect(hstack).toHaveCSS('gap', '16px')
    await expect(hstack.locator('> *')).toHaveCount(5)

    expect(errors).toEqual([])
  })

  test('regression: as="span" still renders display:flex (scoped CSS must not rely on a bare div tag selector)', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-layout-hstack--default&args=as:span'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const hstack = frame.locator('.q-hstack')

    await expect(hstack).toHaveJSProperty('tagName', 'SPAN')
    await expect(hstack).toHaveCSS('display', 'flex')
    await expect(hstack).toHaveCSS('gap', '16px')
  })

  test('gap variant classes apply the correct spacing', async ({ page }) => {
    await page.goto('?path=/story/components-layout-hstack--default')
    await page.getByRole('tab', { name: 'Controls' }).click()
    await page.locator('#control-gap').selectOption('none')

    const frame = page.frameLocator('#storybook-preview-iframe')
    const hstack = frame.locator('.q-hstack')
    await expect(hstack).toHaveClass(/gap--none/)
    await expect(hstack).toHaveCSS('gap', '0px')
  })
})
