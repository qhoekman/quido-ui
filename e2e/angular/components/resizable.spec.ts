import { test, expect } from '@playwright/test'

test.describe('Resizable', () => {
  test('Default story renders a box with native CSS resize enabled, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-resizable--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const box = frame.getByTestId('resizable')

    await expect(box).toBeVisible()
    await expect(box).toHaveText('Resizable Box')
    await expect(box).toHaveCSS('resize', 'both')
    await expect(box).toHaveCSS('overflow', 'auto')

    expect(errors).toEqual([])
  })
})
