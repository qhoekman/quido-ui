import { test, expect } from '@playwright/test'

test.describe('Separator', () => {
  test('Default story renders horizontal separator, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-layout-separator--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const separator = frame.getByTestId('separator')

    await expect(separator).toBeVisible()
    await expect(separator).toHaveAttribute('data-orientation', 'horizontal')
    await expect(separator).toHaveAttribute('role', 'none')

    expect(errors).toEqual([])
  })

  test('vertical orientation applies the vertical data attribute', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-layout-separator--default&args=orientation:vertical'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('separator')).toHaveAttribute(
      'data-orientation',
      'vertical'
    )
  })
})
