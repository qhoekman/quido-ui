import { test, expect } from '@playwright/test'

test.describe('Angular Storybook', () => {
  test('Storybook shell loads without page errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('./')
    await expect(page.locator('#storybook-explorer-tree')).toBeVisible({
      timeout: 30_000
    })

    expect(errors).toEqual([])
  })
})
