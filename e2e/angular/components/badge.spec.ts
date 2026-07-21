import { test, expect } from '@playwright/test'

test.describe('Badge', () => {
  test('Default story renders a rounded badge without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-badge--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const badge = frame.getByTestId('badge')

    await expect(badge).toBeVisible()
    await expect(badge).toHaveText('9+')
    await expect(badge).toHaveCSS('border-radius', /^\d/)

    expect(errors).toEqual([])
  })
})
