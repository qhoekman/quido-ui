import { test, expect } from '@playwright/test'

test.describe('Stack', () => {
  test('Default story renders 5 children in a row with gap, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-stack--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const stack = frame.getByTestId('stack')

    await expect(stack).toBeVisible()
    await expect(stack).toHaveCSS('display', 'flex')
    await expect(stack).toHaveCSS('flex-direction', 'row')
    await expect(stack).toHaveCSS('gap', '16px')
    await expect(stack.locator('> *')).toHaveCount(5)

    expect(errors).toEqual([])
  })

  test('direction arg switches flex-direction', async ({ page }) => {
    await page.goto(
      '?path=/story/components-layout-stack--default&args=direction:column'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('stack')).toHaveCSS('flex-direction', 'column')
  })

  test('gap arg changes the flex gap', async ({ page }) => {
    await page.goto('?path=/story/components-layout-stack--default&args=gap:lg')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('stack')).toHaveCSS('gap', '24px')
  })
})
