import { test, expect } from '@playwright/test'

test.describe('Text', () => {
  test('Default story renders with default (unset) styles, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-typography-text--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const text = frame.getByTestId('text')

    await expect(text).toHaveText('Sample Text')

    expect(errors).toEqual([])
  })

  test('regression: variant=title applies bold, larger text', async ({ page }) => {
    await page.goto('?path=/story/components-typography-text--default&args=variant:title')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const text = frame.getByTestId('text')

    await expect(text).toHaveCSS('font-size', '20px')
    await expect(text).toHaveCSS('font-weight', '700')
  })

  test('regression: size/weight/color controls apply when variant is unset', async ({ page }) => {
    await page.goto(
      '?path=/story/components-typography-text--default&args=size:xl;weight:bold;color:primary'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const text = frame.getByTestId('text')

    await expect(text).toHaveCSS('font-weight', '700')
  })
})
