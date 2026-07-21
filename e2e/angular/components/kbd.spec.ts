import { test, expect } from '@playwright/test'

test.describe('Kbd', () => {
  test('Default story renders kbd elements without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-kbd--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const kbds = frame.getByTestId('kbd')

    await expect(kbds).toHaveCount(2)
    await expect(kbds.nth(0)).toHaveText('CMD')
    await expect(kbds.nth(1)).toHaveText('K')

    expect(errors).toEqual([])
  })
})
