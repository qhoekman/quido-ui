import { test, expect } from '@playwright/test'

test.describe('Tag', () => {
  test('Default story renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-tag--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('tag')).toBeVisible()
    await expect(frame.getByTestId('tag')).toHaveText('Tag Content')

    expect(errors).toEqual([])
  })
})
